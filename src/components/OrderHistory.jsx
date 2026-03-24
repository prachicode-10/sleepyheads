import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, Clock, CheckCircle, Truck, Info } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';

const OrderHistory = ({ isOpen, onClose }) => {
    const { orders } = useOrder();
    const { user } = useAuth();

    if (!user) return null;

    const userOrders = orders;

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Preparing': return <Clock className="text-strawberry" size={20} />;
            case 'On the Way': return <Truck className="text-mint-dark" size={20} />;
            case 'Delivered': return <CheckCircle className="text-chocolate" size={20} />;
            default: return <Info size={20} />;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-cream-light rounded-[3rem] overflow-hidden shadow-2xl border border-white flex flex-col max-h-[80vh]"
                    >
                        <div className="p-8 md:p-12 border-b border-chocolate/5 flex items-center justify-between bg-white/50">
                            <div>
                                <h2 className="text-4xl font-black text-chocolate tracking-tighter">Your Journey</h2>
                                <p className="text-chocolate/40 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Order History & Tracking</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 text-chocolate/20 hover:text-chocolate transition-colors"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-8">
                            {userOrders.length === 0 ? (
                                <div className="py-20 text-center">
                                    <div className="w-20 h-20 bg-chocolate/5 rounded-full flex items-center justify-center mx-auto mb-6 text-chocolate/10">
                                        <Package size={40} />
                                    </div>
                                    <h3 className="text-2xl font-black text-chocolate mb-2">No adventures yet.</h3>
                                    <p className="text-chocolate/60">Your order history is a blank canvas. Time to paint!</p>
                                </div>
                            ) : (
                                userOrders.map((order) => (
                                    <div key={order.id} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-chocolate/5 hover:shadow-md transition-shadow">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-chocolate/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-chocolate text-white rounded-2xl flex items-center justify-center shadow-lg">
                                                    <Package size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-chocolate text-xl">#{order.id.slice(0, 8)}</h4>
                                                    <p className="text-xs text-chocolate/40">{new Date(order.created_at).toLocaleDateString()} • {order.order_items?.length || 0} items</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 px-6 py-3 bg-cream-light rounded-2xl border border-chocolate/5">
                                                {getStatusIcon(order.status)}
                                                <span className="font-black text-chocolate uppercase tracking-widest text-xs">{order.status}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {order.order_items?.map((item, idx) => (
                                                <div key={idx} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-cream">
                                                            {/* We don't have images in order_items yet, using a placeholder or common icon */}
                                                            <div className="w-full h-full bg-strawberry/10 flex items-center justify-center text-strawberry text-[10px] font-bold">
                                                                SHAKE
                                                            </div>
                                                        </div>
                                                        <span className="font-bold text-chocolate">{item.name}</span>
                                                    </div>
                                                    <span className="text-chocolate/40 font-bold">${item.price.toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-chocolate/5 flex justify-between items-center">
                                            <span className="font-black text-chocolate-light uppercase tracking-widest text-[10px]">Total Investment</span>
                                            <span className="text-2xl font-black text-chocolate">₹{order.total_amount || 0}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default OrderHistory;
