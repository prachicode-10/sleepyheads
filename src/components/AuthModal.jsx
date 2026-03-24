import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, signup } = useAuth();
    const { addToast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isLogin) {
                await login(email, password);
                addToast(`Welcome back!`);
            } else {
                await signup(name, email, password);
                addToast(`Account created successfully! Check your email if verification is required.`);
            }
            onClose();
        } catch (error) {
            addToast(error.message || 'An error occurred', 'error');
        } finally {
            setLoading(false);
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
                        className="relative w-full max-w-md bg-cream-light rounded-[2.5rem] overflow-hidden shadow-2xl border border-white p-8 md:p-12"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-chocolate/40 hover:text-chocolate transition-colors"
                            disabled={loading}
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-black text-chocolate mb-2">
                                {isLogin ? 'Welcome Back' : 'Join the Club'}
                            </h2>
                            <p className="text-chocolate/60">
                                {isLogin ? 'Sign in to track your cravings' : 'Get exclusive deals and track orders'}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!isLogin && (
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-chocolate/30" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={loading}
                                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-chocolate/5 rounded-2xl focus:border-strawberry transition-all outline-none text-chocolate font-bold disabled:opacity-50"
                                    />
                                </div>
                            )}
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-chocolate/30" size={20} />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-chocolate/5 rounded-2xl focus:border-strawberry transition-all outline-none text-chocolate font-bold disabled:opacity-50"
                                />
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-chocolate/30" size={20} />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={loading}
                                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-chocolate/5 rounded-2xl focus:border-strawberry transition-all outline-none text-chocolate font-bold disabled:opacity-50"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-chocolate text-white rounded-2xl font-black text-lg shadow-xl hover:bg-chocolate-light transition-all mt-4 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading && (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                )}
                                {isLogin ? 'Login' : 'Create Account'}
                            </button>
                        </form>

                        <div className="mt-8 text-center text-chocolate/60 font-medium">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                disabled={loading}
                                className="text-strawberry font-black hover:underline disabled:opacity-50"
                            >
                                {isLogin ? 'Sign Up' : 'Log In'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
