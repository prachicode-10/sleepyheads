import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('sleepyheads_cart');
        if (savedCart) setCart(JSON.parse(savedCart));

        if (user) {
            fetchOrders();
            const subscription = supabase
                .channel('orders-status-updates')
                .on('postgres_changes', {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'orders',
                    filter: `user_id=eq.${user.id}`
                }, (payload) => {
                    setOrders(prev => prev.map(order => 
                        order.id === payload.new.id ? { ...order, ...payload.new } : order
                    ));
                })
                .subscribe();

            return () => {
                subscription.unsubscribe();
            };
        } else {
            setOrders([]);
        }
    }, [user]);

    const fetchOrders = async () => {
        const { data, error } = await supabase
            .from('orders')
            .select('*, order_items(*)')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false });
        
        if (data) setOrders(data);
    };

    const addToCart = (product) => {
        setCart(prev => {
            const newCart = [...prev, { ...product, cartId: Date.now() }];
            localStorage.setItem('sleepyheads_cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const removeFromCart = (cartId) => {
        setCart(prev => {
            const newCart = prev.filter(item => item.cartId !== cartId);
            localStorage.setItem('sleepyheads_cart', JSON.stringify(newCart));
            return newCart;
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('sleepyheads_cart');
    };

    const placeOrder = async () => {
        if (!user || cart.length === 0) return null;

        const total = cart.reduce((sum, item) => sum + item.price, 0);

        // 1. Create order
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .insert({
                user_id: user.id,
                total_amount: total,
                status: 'Preparing'
            })
            .select()
            .single();

        if (orderError) throw orderError;

        // 2. Create order items
        const orderItems = cart.map(item => ({
            order_id: order.id,
            product_id: item.id?.toString() || 'custom',
            name: item.name,
            price: item.price,
            quantity: 1
        }));

        const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItems);

        if (itemsError) throw itemsError;

        // 3. Log activity
        await supabase.from('user_activity').insert({
            user_id: user.id,
            activity_type: 'ORDER_PLACED',
            details: { order_id: order.id, total, item_count: cart.length }
        });

        setOrders(prev => [{ ...order, order_items: orderItems }, ...prev]);
        clearCart();
        return order;
    };

    return (
        <OrderContext.Provider value={{ cart, orders, addToCart, removeFromCart, clearCart, placeOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);
