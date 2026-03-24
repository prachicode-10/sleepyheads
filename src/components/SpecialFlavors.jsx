import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { useOrder } from '../context/OrderContext'
import { useToast } from '../context/ToastContext'

const specials = [
    {
        id: 101,
        title: "Golden Caramel Luxe",
        tag: "LIMITED EDITION",
        desc: "Rich salted caramel with gold-tinted swirls and sea salt flakes. Served in a premium crystal glass for the ultimate indulgence.",
        color: "bg-chocolate/5",
        textColor: "text-chocolate",
        image: "/images/caramel.png",
        price: 9.50
    },
    {
        id: 102,
        title: "Strawberry Dream",
        tag: "NOW TRENDING",
        desc: "Hand-picked alpine strawberries blended with Madagascar vanilla and topped with a single, perfect berry.",
        color: "bg-strawberry/5",
        textColor: "text-chocolate",
        image: "/images/strawberry.png",
        price: 8.95
    },
    {
        id: 103,
        title: "Emerald Mint",
        tag: "NATURE'S VIBE",
        desc: "Fresh peppermint leaves with micro-shavings of dark Belgian chocolate. A sophisticated take on a classic cooling sensation.",
        color: "bg-mint/5",
        textColor: "text-chocolate",
        image: "/images/mint.png",
        price: 9.25
    }
]

const SpecialFlavors = () => {
    const [index, setIndex] = useState(0)
    const { addToCart } = useOrder()
    const { addToast } = useToast()

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % specials.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [])

    const next = () => setIndex((prev) => (prev + 1) % specials.length)
    const prev = () => setIndex((prev) => (prev - 1 + specials.length) % specials.length)

    return (
        <section id="special" className="py-32 bg-cream-light overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
                    <div data-aos="fade-right">
                        <span className="text-strawberry font-black tracking-[0.4em] uppercase text-[10px] mb-6 block bg-strawberry/10 w-fit px-4 py-1 rounded-full">Exquisite Blends</span>
                        <h2 className="text-7xl md:text-8xl font-black text-chocolate leading-[0.9] tracking-tighter">Current <br /><span className="text-strawberry italic font-serif">Curations.</span></h2>
                    </div>
                    <div className="flex gap-6" data-aos="fade-left">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prev}
                            className="w-16 h-16 rounded-3xl bg-white border border-chocolate/5 flex items-center justify-center text-chocolate shadow-xl hover:bg-chocolate hover:text-white transition-all"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={next}
                            className="w-16 h-16 rounded-3xl bg-white border border-chocolate/5 flex items-center justify-center text-chocolate shadow-xl hover:bg-chocolate hover:text-white transition-all"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={`w-full overflow-hidden rounded-[4rem] bg-white border border-chocolate/5 flex flex-col lg:flex-row items-center shadow-[0_50px_100px_-20px_rgba(93,64,55,0.1)]`}
                        >
                            <div className="flex-1 p-12 md:p-24 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-flex items-center gap-3 px-6 py-2 bg-strawberry/10 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-10 border border-strawberry/20 text-strawberry"
                                >
                                    <Sparkles size={14} /> {specials[index].tag}
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className={`text-6xl md:text-8xl font-black text-chocolate mb-10 leading-[1] tracking-tighter`}
                                >
                                    {specials[index].title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className={`text-xl md:text-2xl text-chocolate/60 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium`}
                                >
                                    {specials[index].desc}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            addToCart({ ...specials[index], name: specials[index].title });
                                            addToast(`${specials[index].title} added to cart!`);
                                        }}
                                        className="px-12 py-5 bg-chocolate text-white rounded-3xl font-black text-xl shadow-2xl hover:bg-strawberry transition-colors"
                                    >
                                        Add to Cart • ${specials[index].price.toFixed(2)}
                                    </motion.button>
                                    <button
                                        onClick={() => addToast("Ingredients coming soon!", "info")}
                                        className={`text-chocolate font-black uppercase tracking-widest text-xs border-b-2 border-chocolate/10 pb-2 hover:border-chocolate transition-all`}
                                    >
                                        Ingredients
                                    </button>
                                </motion.div>
                            </div>

                            <div className="flex-1 w-full lg:h-[700px] overflow-hidden">
                                <motion.img
                                    key={specials[index].image}
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1.2 }}
                                    src={specials[index].image}
                                    alt={specials[index].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Premium Pagination */}
                    <div className="mt-12 flex justify-center lg:justify-start gap-4 mx-auto lg:mx-24">
                        {specials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? 'w-24 bg-strawberry' : 'w-8 bg-chocolate/10 hover:bg-chocolate/20'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialFlavors
