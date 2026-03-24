import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Play } from 'lucide-react'

const MilkshakeBuilder = () => {
    return (
        <section className="py-32 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="flex-1" data-aos="fade-right">
                        <span className="text-strawberry font-black tracking-[0.4em] uppercase text-[10px] mb-6 block bg-strawberry/10 w-fit px-4 py-1 rounded-full">Artisanal Process</span>
                        <h2 className="text-7xl md:text-8xl font-black text-chocolate mb-10 leading-[0.9] tracking-tighter">
                            The <br /><span className="text-strawberry italic font-serif">Ritual.</span>
                        </h2>
                        <p className="text-chocolate/60 text-xl leading-relaxed mb-12 max-w-lg">
                            We don't just blend shakes; we curate experiences. Every ingredient is a deliberate choice, every churn a rhythmic pursuit of perfection.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Origin", desc: "Sourced from local alpine farms", icon: <Sparkles size={16} /> },
                                { title: "Purity", desc: "No artificial dyes or additives", icon: <Sparkles size={16} /> },
                                { title: "Texture", desc: "Triple-churned velvet finish", icon: <Sparkles size={16} /> },
                                { title: "Finish", desc: "Artisan toppings & garnishings", icon: <Sparkles size={16} /> }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-3 group">
                                    <div className="w-10 h-10 bg-chocolate text-white rounded-xl flex items-center justify-center group-hover:bg-strawberry transition-colors duration-500 shadow-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-chocolate uppercase tracking-widest text-[10px]">{item.title}</h4>
                                        <p className="text-chocolate/40 text-xs font-bold">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative" data-aos="fade-left">
                        <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(93,64,55,0.2)] border border-chocolate/5 aspect-[4/5]">
                            <img
                                src="/images/hero.png"
                                alt="Crafting Process"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 to-transparent flex items-end p-12">
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-[2rem] w-full">
                                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Handcrafted with Heart</h3>
                                    <p className="text-white/60 text-sm font-medium">Our master blenders are at work creating your next favorite memory.</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 w-48 h-48 bg-strawberry/10 rounded-full blur-3xl -z-10"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-12 -left-12 w-64 h-64 bg-chocolate/5 rounded-full blur-3xl -z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MilkshakeBuilder
