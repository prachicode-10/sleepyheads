import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-light"
        >
            {/* Minimal Fancy Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-chocolate/5 via-transparent to-strawberry/5"></div>

                {/* Large Background Blur Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-strawberry/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -right-20 w-[50rem] h-[50rem] bg-chocolate/5 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-white/40 backdrop-blur-md rounded-full text-chocolate font-black uppercase text-[10px] tracking-[0.3em] mb-8 border border-white"
                        >
                            <span className="w-2 h-2 bg-strawberry rounded-full animate-pulse"></span>
                            Est. 2024 • Artisanal
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-7xl md:text-9xl font-black text-chocolate leading-[0.9] mb-10 tracking-tighter"
                        >
                            Pure <br />
                            <span className="text-strawberry italic font-serif">Euphoria.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-xl md:text-2xl text-chocolate/60 mb-12 max-w-xl font-medium leading-relaxed"
                        >
                            Handcrafted shakes that redefine indulgence.
                            <span className="text-chocolate font-bold"> Minimal ingredients. Maximum soul.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-wrap gap-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: '#5D4037', color: '#fff' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 bg-chocolate text-white rounded-3xl font-black text-lg shadow-2xl transition-all"
                            >
                                Explore Menu
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.6)' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 border-2 border-chocolate/10 text-chocolate backdrop-blur-md rounded-3xl font-black text-lg transition-all"
                            >
                                Our Story
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 w-full aspect-square md:aspect-[4/5] max-w-lg mx-auto rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(93,64,55,0.3)] border-[12px] border-white glass">
                            <img
                                src="/images/hero.png"
                                alt="Signature Milkshake"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                            />
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white p-6 rounded-[2rem] shadow-2xl z-20 border border-chocolate/5 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-strawberry/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="text-4xl block mb-2">🍓</span>
                            <span className="text-xs font-black tracking-widest text-chocolate/40 uppercase">Top Rated</span>
                            <p className="text-lg font-black text-chocolate mt-1">Berry Bliss</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-white/60 text-xs font-black tracking-widest uppercase group-hover:text-white transition-colors">Discover More</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
                >
                    <div className="w-1 h-2 bg-strawberry rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
