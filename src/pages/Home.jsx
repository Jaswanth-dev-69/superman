import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useSpring, animated, config } from '@react-spring/web'

export default function Home() {
    const sectionRef = useRef(null)
    const videoRef = useRef(null)
    const overlayRef = useRef(null)
    const subtitleRef = useRef(null)
    const descRef = useRef(null)

    // React Spring animations for buttons
    const [showButtons, setShowButtons] = useState(false)

    const btn1Spring = useSpring({
        opacity: showButtons ? 1 : 0,
        transform: showButtons ? 'translateY(0px) scale(1)' : 'translateY(40px) scale(0.9)',
        config: { ...config.wobbly, tension: 180, friction: 14 },
        delay: 200,
    })

    const btn2Spring = useSpring({
        opacity: showButtons ? 1 : 0,
        transform: showButtons ? 'translateY(0px) scale(1)' : 'translateY(40px) scale(0.9)',
        config: { ...config.wobbly, tension: 180, friction: 14 },
        delay: 200,
    })

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            // Start text elements hidden
            gsap.set(overlayRef.current, { opacity: 0 })
            gsap.set(subtitleRef.current, { opacity: 0, y: 30 })
            gsap.set(descRef.current, { opacity: 0, y: 25 })

            // Staggered reveal timeline (text only, buttons handled by React Spring)
            tl.to(overlayRef.current, { opacity: 1, duration: 1.2 }, 0.5)
                .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, 1.0)
                .to(descRef.current, { opacity: 1, y: 0, duration: 0.9 }, 1.3)
                .call(() => setShowButtons(true), null, 1.5)
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleScrollToClark = () => {
        const el = document.getElementById('clark')
        if (el) {
            window.scrollTo({
                top: el.offsetTop,
                behavior: 'smooth',
            })
        }
    }

    return (
        <div
            ref={sectionRef}
            className="relative w-full h-screen overflow-hidden"
        >
            {/* ── Background Video ── */}
            <video
                ref={videoRef}
                src="/videos/herobg.mp4"
                muted
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ── Dark Navy Gradient Overlay ── */}
            <div
                ref={overlayRef}
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(7,10,15,0.2) 0%, rgba(7,10,15,0.4) 40%, rgba(7,10,15,0.75) 70%, rgba(7,10,15,0.95) 100%)',
                }}
            />

            {/* ── Content placed right below the MAN OF STEEL title ── */}
            <div className="absolute z-10 left-0 right-0 top-[70%] flex flex-col items-center px-5 text-center">
                {/* Subtitle */}
                <h2
                    ref={subtitleRef}
                    className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] text-hero-text mb-4"
                >
                    Hope.{' '}
                    <span className="text-hero-gold">Strength.</span>{' '}
                    <span className="text-gradient-gold">Sacrifice.</span>
                </h2>

                {/* Description */}
                <p
                    ref={descRef}
                    className="font-body text-sm md:text-base text-hero-textMuted max-w-lg leading-relaxed mb-8"
                >
                    Before the cape, before the symbol — there was a boy from a dying world,
                    sent across the stars to become something greater.
                </p>

                {/* Buttons - animated via React Spring */}
                <div className="flex flex-wrap items-center justify-center gap-5">
                    <animated.button
                        style={btn1Spring}
                        onClick={handleScrollToClark}
                        className="group relative px-12 py-4 bg-hero-gold text-hero-black font-body font-semibold text-base tracking-widest uppercase rounded-lg overflow-hidden transition-all duration-300 hover:bg-hero-goldHover hover:shadow-xl hover:shadow-hero-gold/30 cursor-pointer"
                    >
                        <span className="relative z-10">Begin the Journey</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-hero-goldHover to-hero-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </animated.button>


                </div>
            </div>

            {/* ── Bottom fade into next section ── */}
            <div
                className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-5"
                style={{
                    background: 'linear-gradient(to bottom, transparent, var(--color-hero-black))',
                }}
            />
        </div>
    )
}
