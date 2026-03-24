import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Coffee, Heart, Sparkles, Star } from 'lucide-react'

const About = () => {
    const steps = [
        { icon: <Heart fill="currentColor" />, title: "Crafted with Love", desc: "Every glass is a masterpiece filled with hand-picked premium ingredients." },
        { icon: <CheckCircle fill="currentColor" />, title: "Zero Artificials", desc: "Only real fruits, premium chocolate, and farm-fresh dairy bases." },
        { icon: <Coffee fill="currentColor" />, title: "Churned Fresh", desc: "We blend every order the moment you ask for it for that perfect fluff." }
    ]

    return (
        <section id="about" className="py-32 bg-cream-light relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="flex-1 order-2 lg:order-1" data-aos="fade-right">
                        <span className="text-strawberry font-black tracking-[0.3em] uppercase text-sm mb-4 block">The Heart of Sleepyheads</span>
                        <h2 className="text-6xl font-black text-chocolate mb-10 leading-tight">Churning <span className="text-strawberry">Dreams</span> <br /> Into Reality</h2>
                        <p className="text-chocolate/60 text-xl mb-12 leading-relaxed">
                            Founded on a vision of the perfect evening chill, Sleepyheads is more than just a milkshake bar. It's a sanctuary for those who appreciate the finer, creamier things in life.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex gap-8 items-start group"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-strawberry shadow-xl flex-shrink-0 group-hover:bg-strawberry group-hover:text-white transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black text-chocolate mb-2 tracking-tight">{step.title}</h4>
                                        <p className="text-chocolate/50 text-base leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-2 relative" data-aos="fade-left">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="w-full h-[600px] bg-white rounded-[5rem] overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-[15px] border-white">
                                <div className="absolute inset-0 flex items-center justify-center text-[10rem] animate-pulse">🥤</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-strawberry/10 to-transparent"></div>
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                className="absolute -bottom-10 -left-10 glass p-10 rounded-[2.5rem] shadow-2xl max-w-sm border border-white/20 backdrop-blur-xl"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex gap-4 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFCDD2" className="text-strawberry" />)}
                                </div>
                                <p className="text-chocolate font-black text-xl leading-snug mb-4">"The texture is beyond anything I've tasted. It's clouds in a glass."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-mint rounded-full"></div>
                                    <span className="text-chocolate-light font-bold">Emma Wilson</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute top-10 -right-10 bg-chocolate text-white p-6 rounded-[2rem] shadow-2xl flex items-center gap-4"
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                    <Sparkles size={24} className="text-strawberry" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black">100%</span>
                                    <span className="text-xs uppercase tracking-widest font-bold opacity-60">Dream Approved</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-strawberry/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-lavender/5 rounded-full blur-[100px]"></div>
        </section>
    )
}

export default About
