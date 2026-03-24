import React from 'react'
import { motion } from 'framer-motion'
import { Plus, Star, ArrowRight } from 'lucide-react'
import { useOrder } from '../context/OrderContext'
import { useToast } from '../context/ToastContext'

const milkshakes = [
    {
        id: 1,
        name: 'Vanilla Dream',
        description: 'Creamy Madagascar vanilla beans with a touch of honey.',
        price: 249,
        color: 'bg-cream-dark',
        image: '/images/hero.png',
        tag: 'Classic'
    },
    {
        id: 2,
        name: 'Choco Cloud',
        description: 'Deep Belgian chocolate with whipped marshmallow fluff.',
        price: 299,
        color: 'bg-chocolate-light',
        image: '/images/hero.png',
        tag: 'Popular'
    },
    {
        id: 3,
        name: 'Berry Blush',
        description: 'Fresh field strawberries blended to pink perfection.',
        price: 279,
        color: 'bg-strawberry',
        image: '/images/strawberry.png',
        tag: 'Fresh'
    },
    {
        id: 4,
        name: 'Minty Mist',
        description: 'Cool peppermint leaves with dark chocolate chips.',
        price: 319,
        color: 'bg-mint',
        image: '/images/mint.png',
        tag: 'Cool'
    },
    {
        id: 5,
        name: 'Caramel Gold',
        description: 'Rich salted caramel with gold-tinted swirls.',
        price: 349,
        color: 'bg-lavender',
        image: '/images/caramel.png',
        tag: 'Premium'
    },
    {
        id: 6,
        name: 'Cookie Crumble',
        description: 'Buttery cookies crushed into rich velvet cream.',
        price: 329,
        color: 'bg-chocolate-dark',
        image: '/images/hero.png',
        tag: 'Crunchy'
    }
]

const MenuCard = ({ item }) => {
    const { addToCart } = useOrder();
    const { addToast } = useToast();

    return (
        <motion.div
            whileHover={{ y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group bg-white rounded-[3.5rem] p-4 flex flex-col relative overflow-hidden h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_45px_80px_-20px_rgba(93,64,55,0.15)] transition-all"
            data-aos="fade-up"
        >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                    <div className={`px-4 py-1.5 rounded-full ${item.color} text-chocolate text-[10px] font-black tracking-widest uppercase bg-opacity-90 backdrop-blur-md shadow-lg`}>
                        {item.tag}
                    </div>
                </div>
                <div className="absolute top-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl flex items-center gap-1 text-strawberry shadow-lg">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-black">4.9</span>
                    </div>
                </div>
            </div>

            <div className="px-6 pb-6 flex flex-col flex-grow">
                <div className="mb-6">
                    <h3 className="text-3xl font-black text-chocolate mb-3 tracking-tight">{item.name}</h3>
                    <p className="text-chocolate/50 text-base leading-relaxed line-clamp-2">{item.description}</p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-chocolate/30 tracking-widest uppercase">Investment</span>
                        <span className="text-3xl font-black text-chocolate">₹{item.price}</span>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            addToCart(item);
                            addToast(`${item.name} added to cart!`);
                        }}
                        className="bg-chocolate text-white w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl hover:bg-strawberry transition-colors duration-300"
                    >
                        <Plus size={28} />
                    </motion.button>
                </div>
            </div>

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-chocolate/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </motion.div>
    )
}

const Menu = () => {
    return (
        <section id="menu" className="py-32 bg-cream-light relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12" data-aos="fade-up">
                    <div className="max-w-2xl">
                        <span className="text-strawberry font-black tracking-[0.4em] uppercase text-[10px] mb-6 block bg-strawberry/10 w-fit px-4 py-1 rounded-full">Liquid Luxury</span>
                        <h2 className="text-7xl md:text-8xl font-black text-chocolate mb-8 leading-[0.9] tracking-tighter">The <br /> <span className="text-strawberry italic serif">Cravings.</span></h2>
                        <p className="text-chocolate/60 text-xl leading-relaxed max-w-lg">
                            Each sip is a deliberate choice of excellence. Discover our collection of signature blends.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 text-chocolate font-black uppercase text-xs tracking-[0.3em] group border-b-2 border-chocolate/10 pb-4 hover:border-strawberry transition-all"
                    >
                        See Full Menu <ArrowRight size={20} className="text-strawberry" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {milkshakes.map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menu
