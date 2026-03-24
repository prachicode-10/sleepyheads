import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Coffee, ShoppingCart, User as UserIcon, LogOut, ClipboardList } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useOrder } from '../context/OrderContext'
import AuthModal from './AuthModal'

import CartDrawer from './CartDrawer'
import OrderHistory from './OrderHistory'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isOrdersOpen, setIsOrdersOpen] = useState(false)

    const { user, profile, logout } = useAuth()
    const { cart } = useOrder()

    const getUserInitial = () => {
        if (profile?.full_name) return profile.full_name[0].toUpperCase();
        if (user?.email) return user.email[0].toUpperCase();
        return 'U';
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'Special', href: '#special' },
        { name: 'About', href: '#about' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-2xl translate-y-0' : 'py-8 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-strawberry rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            <Coffee size={24} className="md:w-7 md:h-7" />
                        </div>
                        <span className={`text-2xl md:text-3xl font-black tracking-tighter ${scrolled ? 'text-chocolate' : 'text-white'} transition-colors duration-300`}>
                            Sleepy<span className="text-strawberry">heads</span>
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`text-[10px] font-black tracking-widest uppercase ${scrolled ? 'text-chocolate/70 hover:text-strawberry' : 'text-white/70 hover:text-white'
                                    } transition-all duration-300 relative group`}
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-strawberry rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Cart Trigger */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsCartOpen(true)}
                            className={`relative p-2 rounded-xl transition-all ${scrolled ? 'text-chocolate hover:bg-chocolate/5' : 'text-white hover:bg-white/10'}`}
                        >
                            <ShoppingCart size={24} />
                            {cart.length > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 w-5 h-5 bg-strawberry text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg"
                                >
                                    {cart.length}
                                </motion.span>
                            )}
                        </motion.button>

                        {user ? (
                            <div className="flex items-center gap-2 md:gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setIsOrdersOpen(true)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${scrolled ? 'bg-chocolate/5 text-chocolate' : 'bg-white/10 text-white'}`}
                                >
                                    <ClipboardList size={20} />
                                    <span className="hidden md:block font-black text-[10px] uppercase tracking-widest">My Journey</span>
                                </motion.button>
                                <div className="flex items-center gap-2">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${scrolled ? 'bg-chocolate text-white' : 'bg-white text-chocolate'}`}>
                                        {getUserInitial()}
                                    </div>
                                    <button
                                        onClick={logout}
                                        className={`p-2 rounded-xl transition-all ${scrolled ? 'text-chocolate/40 hover:text-strawberry' : 'text-white/40 hover:text-strawberry'}`}
                                    >
                                        <LogOut size={18} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsAuthModalOpen(true)}
                                className={`${scrolled ? 'bg-chocolate text-white' : 'bg-white text-chocolate'
                                    } px-6 py-2.5 rounded-2xl font-black text-xs tracking-widest uppercase shadow-xl transition-all duration-300`}
                            >
                                Login
                            </motion.button>
                        )}

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden ${scrolled ? 'text-chocolate' : 'text-white'} p-2 hover:bg-white/10 rounded-xl transition-colors`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="lg:hidden glass border-t border-white/10 overflow-hidden shadow-2xl m-4 rounded-[2rem]"
                        >
                            <div className="flex flex-col gap-6 p-10 items-center">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            setIsOpen(false);
                                            // Optional: handle smooth scroll here if not using native
                                        }}
                                        className="text-chocolate font-black text-2xl tracking-tight hover:text-strawberry transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                {user ? (
                                    <div className="w-full flex flex-col gap-4 mt-4 pt-6 border-t border-chocolate/5">
                                        <button
                                            onClick={() => { setIsOrdersOpen(true); setIsOpen(false); }}
                                            className="w-full bg-chocolate/5 text-chocolate py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3"
                                        >
                                            <ClipboardList size={24} /> My Journey
                                        </button>
                                        <button
                                            onClick={() => { logout(); setIsOpen(false); }}
                                            className="w-full py-4 text-chocolate/40 font-black text-sm uppercase tracking-widest"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => { setIsAuthModalOpen(true); setIsOpen(false); }}
                                        className="w-full bg-chocolate text-white py-5 rounded-2xl font-black text-xl shadow-lg mt-4"
                                    >
                                        Login / Sign Up
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <OrderHistory isOpen={isOrdersOpen} onClose={() => setIsOrdersOpen(false)} />
        </>
    )
}

export default Navbar
