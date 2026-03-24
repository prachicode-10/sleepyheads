import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import SpecialFlavors from './components/SpecialFlavors'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'

import MilkshakeBuilder from './components/MilkshakeBuilder'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { AuthProvider } from './context/AuthContext'
import { OrderProvider } from './context/OrderContext'
import { ToastProvider } from './context/ToastContext'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })

        // Simulate loading
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <ToastProvider>
            <AuthProvider>
                <OrderProvider>
                    <AnimatePresence>
                        {loading && <LoadingScreen key="loader" />}
                    </AnimatePresence>

                    <div className={`min-h-screen bg-cream-light font-rounded selection:bg-strawberry selection:text-chocolate transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                        <ScrollProgress />
                        <Navbar />
                        <main>
                            <Hero />
                            <Menu />
                            <SpecialFlavors />
                            <MilkshakeBuilder />
                            <About />
                            <Reviews />
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                </OrderProvider>
            </AuthProvider>
        </ToastProvider>
    )
}

export default App
