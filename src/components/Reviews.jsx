import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, ChevronRight } from 'lucide-react'

const reviews = [
    {
        name: "Alex Rivera",
        role: "Milkshake Enthusiast",
        comment: "The Vanilla Dream is literally what clouds must taste like. I've never had a more velvety drink in my life! The texture is just perfect.",
        rating: 5,
        avatar: "🍦",
        color: "bg-cream-dark"
    },
    {
        name: "Sarah Chen",
        role: "Food Blogger",
        comment: "Sleepyheads nailed the aesthetic and the flavor. The Lavender Sky is a must-try for anyone who loves unique, high-end treats.",
        rating: 5,
        avatar: "💜",
        color: "bg-lavender"
    },
    {
        name: "Mark Thompson",
        role: "Dessert Critic",
        comment: "Quality ingredients and beautiful presentation. It's rare to find a brand that cares this much about the entire customer experience.",
        rating: 5,
        avatar: "🥛",
        color: "bg-chocolate-light"
    }
]

const Reviews = () => {
    return (
        <section id="reviews" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
                    <span className="text-strawberry font-black tracking-[0.3em] uppercase text-sm mb-4 block">Customer Stories</span>
                    <h2 className="text-6xl font-black text-chocolate mb-6 leading-tight">Sweet <span className="text-strawberry">Nothings</span></h2>
                    <p className="text-chocolate/60 text-xl leading-relaxed">
                        Join thousands of fellow dreamers who have found their perfect sip. Here's what they have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -15, boxShadow: "0 50px 80px -20px rgba(0,0,0,0.1)" }}
                            transition={{ duration: 0.5 }}
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                            className="bg-cream-light p-12 rounded-[4rem] relative group border border-cream-dark/50 transition-all cursor-default"
                        >
                            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                                <Quote size={60} className="text-chocolate" />
                            </div>

                            <div className="flex items-center gap-6 mb-10">
                                <div className={`w-20 h-20 ${review.color} rounded-3xl flex items-center justify-center text-4xl shadow-lg border-4 border-white group-hover:rotate-6 transition-transform duration-500`}>
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-black text-chocolate text-2xl tracking-tight">{review.name}</h4>
                                    <p className="text-strawberry font-bold text-xs uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1.5 mb-8 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} />
                                ))}
                            </div>

                            <p className="text-chocolate/70 text-lg leading-relaxed italic mb-8 font-medium">"{review.comment}"</p>

                            <div className="flex items-center gap-2 text-chocolate-light font-black text-[10px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                Read Full Story <ChevronRight size={14} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-24 flex items-center justify-center gap-6 p-8 glass rounded-[3rem] max-w-fit mx-auto shadow-xl" data-aos="zoom-in">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-cream-dark"></div>)}
                    </div>
                    <p className="text-chocolate font-black tracking-tight"><span className="text-strawberry">4.9/5</span> based on 2,500+ reviews</p>
                </div>
            </div>
        </section>
    )
}

export default Reviews
