import React from 'react'
import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
        >
            <div className="relative">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-strawberry-dark mb-6"
                >
                    <Coffee size={80} strokeWidth={1} />
                </motion.div>
                <motion.div
                    className="absolute -top-4 -right-4"
                    animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                    <div className="w-4 h-4 bg-mint rounded-full"></div>
                </motion.div>
            </div>

            <div className="overflow-hidden h-2 w-48 bg-cream-dark rounded-full mb-4">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="h-full bg-strawberry"
                ></motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-chocolate font-bold tracking-widest uppercase text-xs"
            >
                Preparing your dream sip...
            </motion.p>
        </motion.div>
    )
}

export default LoadingScreen
