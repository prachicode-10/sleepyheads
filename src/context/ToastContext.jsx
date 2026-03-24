import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'success') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-4 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            className="pointer-events-auto"
                        >
                            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-chocolate/5 p-4 pr-12 flex items-center gap-4 min-w-[300px] relative overflow-hidden group">
                                <div className={`w-1 h-full absolute left-0 top-0 ${toast.type === 'success' ? 'bg-mint-dark' :
                                        toast.type === 'error' ? 'bg-strawberry' : 'bg-chocolate'
                                    }`} />

                                <div className={
                                    toast.type === 'success' ? 'text-mint-dark' :
                                        toast.type === 'error' ? 'text-strawberry' : 'text-chocolate'
                                }>
                                    {toast.type === 'success' && <CheckCircle size={24} />}
                                    {toast.type === 'error' && <XCircle size={24} />}
                                    {toast.type === 'info' && <Info size={24} />}
                                </div>

                                <div>
                                    <p className="text-chocolate font-black text-sm tracking-tight">{toast.message}</p>
                                </div>

                                <button
                                    onClick={() => removeToast(toast.id)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-chocolate/20 hover:text-chocolate transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
