import React, { useEffect, useState } from 'react'

const ScrollProgress = () => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScroll(progress)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 z-[60] pointer-events-none">
            <div
                className="h-full bg-strawberry-dark shadow-[0_0_10px_rgba(239,154,154,0.8)] transition-all duration-100 ease-out"
                style={{ width: `${scroll}%` }}
            ></div>
        </div>
    )
}

export default ScrollProgress
