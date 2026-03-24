import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, ArrowRight, CreditCard } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, clearCart, placeOrder } = useOrder();
    const { user } = useAuth();
    const { addToast } = useToast();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = async () => {
        if (!user) {
            addToast('Please login to place an order', 'info');
            return;
        }
        try {
            const order = await placeOrder();
            if (order) {
                addToast(`Order placed successfully!`);
                onClose();
            }
        } catch (error) {
            addToast(error.message || 'Failed to place order', 'error');
        }
    };

    const handleRemove = (cartId, name) => {
        removeFromCart(cartId);
        addToast(`${name} removed from cart`, 'info');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="absolute inset-y-0 right-0 w-full max-w-md bg-cream-light shadow-2xl flex flex-col"
                    >
                        <div className="p-8 flex items-center justify-between border-b border-chocolate/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-chocolate text-white rounded-xl flex items-center justify-center">
                                    <ShoppingBag size={20} />
                                </div>
                                <h2 className="text-2xl font-black text-chocolate">Your Cravings</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-chocolate/40 hover:text-chocolate transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-8 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-chocolate/5 rounded-full flex items-center justify-center mb-6 text-chocolate/20">
                                        <ShoppingBag size={40} />
                                    </div>
                                    <h3 className="text-xl font-black text-chocolate mb-2">Empty Tank?</h3>
                                    <p className="text-chocolate/60">Your cart is currently empty. Start adding some liquid gold!</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.cartId}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-4 p-4 bg-white rounded-3xl shadow-sm border border-chocolate/5"
                                    >
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-black text-chocolate">{item.name}</h4>
                                                <button
                                                    onClick={() => handleRemove(item.cartId, item.name)}
                                                    className="text-chocolate/20 hover:text-strawberry transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <p className="text-xs text-chocolate/40 mb-2">{item.tag}</p>
                                            <span className="font-black text-chocolate">${item.price.toFixed(2)}</span>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-8 bg-white border-t border-chocolate/5 space-y-6">
                                <div className="flex justify-between items-end">
                                    <span className="text-chocolate/40 font-bold uppercase tracking-widest text-xs">Total Investment</span>
                                    <span className="text-4xl font-black text-chocolate">${total.toFixed(2)}</span>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full py-5 bg-chocolate text-white rounded-[2rem] font-black text-lg shadow-xl hover:bg-strawberry transition-all flex items-center justify-center gap-3"
                                    >
                                        Checkout Now <ArrowRight size={20} />
                                    </button>
                                    <button
                                        onClick={clearCart}
                                        className="w-full py-3 text-chocolate/40 font-bold text-sm tracking-widest uppercase hover:text-strawberry transition-colors"
                                    >
                                        Clear Selection
                                    </button>
                                </div>

                                {!user && (
                                    <div className="p-4 bg-strawberry/5 rounded-2xl border border-strawberry/20 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-strawberry/20 rounded-lg flex items-center justify-center text-strawberry">
                                            <CreditCard size={16} />
                                        </div>
                                        <p className="text-[10px] font-bold text-chocolate/60">
                                            Login to secure your order and track delivery.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
