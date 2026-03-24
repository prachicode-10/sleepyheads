import React from 'react'
import { Instagram, Twitter, Facebook, Coffee, Heart, ArrowUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useToast } from '../context/ToastContext'

const Footer = () => {
    const { addToast } = useToast();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleNewsletter = (e) => {
        e.preventDefault();
        addToast("Welcome to the inner circle!", "success");
        e.target.reset();
    };

    return (
        <footer className="bg-white pt-32 pb-16 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-20 mb-24">
                    <div className="max-w-md">
                        <div className="flex items-center gap-4 mb-8 group cursor-pointer" onClick={scrollToTop}>
                            <div className="w-16 h-16 bg-strawberry rounded-[1.5rem] flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
                                <Coffee size={32} />
                            </div>
                            <span className="text-4xl font-black text-chocolate tracking-tighter">Sleepy<span className="text-strawberry">heads</span></span>
                        </div>
                        <p className="text-chocolate/60 text-lg leading-relaxed mb-10">
                            Crafting premium, dreamy milkshakes to chill your mood and revitalize your spirit. Every sip is a piece of art.
                        </p>
                        <div className="flex gap-6">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, backgroundColor: '#5D4037', color: '#fff' }}
                                    className="w-14 h-14 rounded-2xl bg-cream-light text-chocolate flex items-center justify-center transition-all duration-300"
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-chocolate font-black uppercase tracking-[0.2em] text-xs">Navigation</h4>
                            <ul className="flex flex-col gap-4 text-chocolate/60 font-bold">
                                <li><a href="#home" className="hover:text-strawberry transition-colors">Home</a></li>
                                <li><a href="#menu" className="hover:text-strawberry transition-colors">Menu</a></li>
                                <li><a href="#special" className="hover:text-strawberry transition-colors">Specials</a></li>
                                <li><a href="#about" className="hover:text-strawberry transition-colors">Dream Story</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-chocolate font-black uppercase tracking-[0.2em] text-xs">Community</h4>
                            <ul className="flex flex-col gap-4 text-chocolate/60 font-bold">
                                <li><a href="#reviews" className="hover:text-strawberry transition-colors">Reviews</a></li>
                                <li><a href="#" className="hover:text-strawberry transition-colors">Franchise</a></li>
                                <li><a href="#" className="hover:text-strawberry transition-colors">Career</a></li>
                                <li><a href="#" className="hover:text-strawberry transition-colors">Press Kit</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                            <h4 className="text-chocolate font-black uppercase tracking-[0.2em] text-xs">Join the Dream</h4>
                            <p className="text-chocolate/60 text-sm mb-4 font-medium">Get secret menu items & special offers.</p>
                            <form onSubmit={handleNewsletter} className="relative">
                                <input
                                    required
                                    type="email"
                                    placeholder="dreamer@cozy.com"
                                    className="w-full bg-cream-light py-4 px-6 rounded-2xl outline-none border-2 border-transparent focus:border-strawberry font-bold text-chocolate"
                                />
                                <button type="submit" className="absolute right-2 top-2 bottom-2 bg-chocolate text-white px-6 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-strawberry transition-colors">
                                    Join
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-cream-dark flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-chocolate/40 font-bold text-sm">
                        <span>© 2024 Sleepyheads Inc.</span>
                        <span className="hidden md:block">•</span>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-chocolate transition-colors">Privacy</a>
                            <a href="#" className="hover:text-chocolate transition-colors">Terms</a>
                            <a href="#" className="hover:text-chocolate transition-colors">Cookies</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-chocolate/40 text-sm font-bold">
                        Made with <Heart size={14} className="text-strawberry fill-strawberry" /> by Sleepyheads team
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        className="w-16 h-16 bg-chocolate text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-strawberry transition-all duration-500"
                    >
                        <ArrowUp size={28} />
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
