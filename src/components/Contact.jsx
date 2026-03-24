import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Mail, Instagram, Twitter, Facebook, ArrowUpRight, ChevronRight } from 'lucide-react'
import { useToast } from '../context/ToastContext'

const Contact = () => {
    const { addToast } = useToast();
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            addToast("Your dreamy message has been sent!", "success");
            e.target.reset();
        }, 1500);
    };

    return (
        <section id="contact" className="py-32 bg-cream-light relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[15px] border-white relative z-10">
                    <div className="flex-1 bg-chocolate p-16 md:p-24 text-white relative overflow-hidden" data-aos="fade-right">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                        </div>

                        <div className="relative z-10">
                            <span className="text-strawberry font-black tracking-[0.3em] uppercase text-sm mb-4 block">Connection</span>
                            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight">Let's Craft <br /> Something <span className="text-strawberry">Sweet</span></h2>
                            <p className="text-white/60 text-xl mb-16 max-w-md leading-relaxed">
                                Have a dreamy idea for a new flavor? Or want to bring Sleepyheads to your city? Let's talk.
                            </p>

                            <div className="space-y-12">
                                <motion.div whileHover={{ x: 10 }} className="flex gap-8 items-center cursor-default">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shadow-2xl border border-white/5">
                                        <MapPin size={32} className="text-strawberry" />
                                    </div>
                                    <div>
                                        <p className="font-black text-xl tracking-tight">Our Flagship Store</p>
                                        <p className="text-white/50 text-base">123 Cloud Lane, Fluffy Valley, CA</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ x: 10 }} className="flex gap-8 items-center cursor-default">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shadow-2xl border border-white/5">
                                        <Phone size={32} className="text-strawberry" />
                                    </div>
                                    <div>
                                        <p className="font-black text-xl tracking-tight">Drift a Line</p>
                                        <p className="text-white/50 text-base">+1 (555) 987-SLEEPY</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ x: 10 }} className="flex gap-8 items-center cursor-default">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shadow-2xl border border-white/5">
                                        <Mail size={32} className="text-strawberry" />
                                    </div>
                                    <div>
                                        <p className="font-black text-xl tracking-tight">Whale Mail</p>
                                        <p className="text-white/50 text-base">hello@sleepyheads.com</p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="mt-20 flex gap-6">
                                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-strawberry transition-all duration-300"
                                    >
                                        <Icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex-[1.4] p-16 md:p-24 bg-white relative" data-aos="fade-left">
                        <form className="space-y-10" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-chocolate font-black text-xs uppercase tracking-[0.2em] ml-2 block opacity-60">Your Identity</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Waking Upperson"
                                        className="w-full px-8 py-6 bg-cream-light border-2 border-transparent focus:border-strawberry rounded-[2rem] transition-all outline-none text-chocolate font-bold text-lg"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-chocolate font-black text-xs uppercase tracking-[0.2em] ml-2 block opacity-60">Digital Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="dreamer@cozy.com"
                                        className="w-full px-8 py-6 bg-cream-light border-2 border-transparent focus:border-strawberry rounded-[2rem] transition-all outline-none text-chocolate font-bold text-lg"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-chocolate font-black text-xs uppercase tracking-[0.2em] ml-2 block opacity-60">The Topic</label>
                                <div className="relative">
                                    <select className="w-full px-8 py-6 bg-cream-light border-2 border-transparent focus:border-strawberry rounded-[2rem] transition-all outline-none text-chocolate font-bold text-lg appearance-none cursor-pointer">
                                        <option>Curious dreamer (Inquiry)</option>
                                        <option>Master Chef (Flavor Suggestion)</option>
                                        <option>Business Mogul (Franchise)</option>
                                        <option>Fellow Sleepyhead (Feedback)</option>
                                    </select>
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                        <ChevronRight className="rotate-90" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-chocolate font-black text-xs uppercase tracking-[0.2em] ml-2 block opacity-60">Your Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    placeholder="What's churning in your mind?"
                                    className="w-full px-8 py-6 bg-cream-light border-2 border-transparent focus:border-strawberry rounded-[3rem] transition-all outline-none text-chocolate font-bold text-lg resize-none"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: submitting ? 1 : 1.02, y: submitting ? 0 : -5 }}
                                whileTap={{ scale: submitting ? 1 : 0.98 }}
                                disabled={submitting}
                                className={`w-full py-6 rounded-[2rem] font-black flex items-center justify-center gap-4 text-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 ${submitting ? 'bg-chocolate/20 text-chocolate/40 cursor-wait' : 'bg-chocolate text-white hover:bg-strawberry'
                                    }`}
                            >
                                {submitting ? 'Sending...' : 'Send the Message'} <ArrowUpRight size={28} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white -z-10"></div>
        </section>
    )
}

export default Contact
