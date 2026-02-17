import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Clark() {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    const textPanelRef = useRef(null)
    const headingRef = useRef(null)
    const labelRef = useRef(null)
    const paraRefs = useRef([])
    const quoteRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ── Background image zoom-in from z-axis on scroll ──
            if (imageRef.current) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'top 10%',
                        scrub: 1.5,
                    },
                }).fromTo(
                    imageRef.current,
                    { scale: 1.3, opacity: 0.5 },
                    { scale: 1, opacity: 1, ease: 'none' }
                )
            }

            // ── Label slide in ──
            if (labelRef.current) {
                gsap.from(labelRef.current, {
                    x: -30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: labelRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                })
            }

            // ── Heading slide up ──
            if (headingRef.current) {
                gsap.from(headingRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                })
            }

            // ── Staggered paragraph + quote reveals ──
            const staggerEls = [...paraRefs.current.filter(Boolean)]
            if (quoteRef.current) staggerEls.push(quoteRef.current)

            if (staggerEls.length > 0) {
                gsap.from(staggerEls, {
                    y: 35,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: staggerEls[0],
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                })
            }

            // ── Blur entire section on scroll-out ──
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                onUpdate: (self) => {
                    // Blur more aggressively as we scroll out
                    const blur = self.progress * 10
                    if (sectionRef.current) {
                        sectionRef.current.style.filter = `blur(${blur}px)`
                        sectionRef.current.style.opacity = 1 - self.progress * 0.5 // darken slightly too
                    }
                },
            })

            // ── Background gradient transition ──
            gsap.fromTo(
                sectionRef.current,
                {
                    background:
                        'linear-gradient(180deg, #070A0F 0%, #0D1321 100%)',
                },
                {
                    background:
                        'linear-gradient(180deg, #070A0F 0%, #1B2A41 50%, #7A0C12 100%)',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        end: 'bottom 20%',
                        scrub: 2,
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const addParaRef = (el) => {
        if (el && !paraRefs.current.includes(el)) {
            paraRefs.current.push(el)
        }
    }

    return (
        <div
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden"
        >
            {/* ── Full Background Image (zooms in via GSAP) ── */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    ref={imageRef}
                    src="/images/superman-landscape.png"
                    alt="Clark Kent in Smallville"
                    className="w-full h-full object-cover object-top origin-center"
                    style={{ willChange: 'transform' }}
                />
                {/* Dark overlay gradient from left for text readability */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(to left, rgba(7,10,15,0.15) 0%, rgba(7,10,15,0.55) 30%, rgba(7,10,15,0.88) 55%, rgba(7,10,15,0.97) 75%)',
                    }}
                />
                {/* Bottom + top fade */}
                <div
                    className="absolute bottom-0 left-0 w-full h-40"
                    style={{
                        background: 'linear-gradient(to top, #070A0F, transparent)',
                    }}
                />
                <div
                    className="absolute top-0 left-0 w-full h-24"
                    style={{
                        background: 'linear-gradient(to bottom, #070A0F, transparent)',
                    }}
                />
            </div>

            {/* ── Left-side Text Content with padding ── */}
            <div className="relative z-10 flex items-center justify-start min-h-screen py-24" style={{ paddingLeft: '60px', paddingRight: '40px' }}>
                <div
                    ref={textPanelRef}
                    className="w-full max-w-xl"
                >
                    {/* Section label */}
                    <div ref={labelRef} className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-[2px] bg-hero-gold" />
                        <span className="font-body text-xs tracking-[0.3em] uppercase text-hero-gold font-medium">
                            Smallville, Kansas
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        ref={headingRef}
                        className="font-display text-4xl lg:text-5xl xl:text-6xl tracking-wide text-hero-text mb-6 leading-tight"
                    >
                        The Boy from{' '}
                        <span className="text-gradient-gold">Smallville</span>
                    </h2>

                    {/* Paragraphs - staggered via GSAP */}
                    <p
                        ref={addParaRef}
                        className="font-body text-base text-hero-textSoft leading-relaxed mb-4"
                    >
                        Before the world knew his name, he was just Clark — a quiet kid
                        learning what it meant to be human from people who chose to love
                        what they couldn't understand.
                    </p>

                    <p
                        ref={addParaRef}
                        className="font-body text-base text-hero-textSoft leading-relaxed mb-8"
                    >
                        Jonathan and Martha Kent gave him more than a home — they gave
                        him a compass. In Smallville, Clark learned that true power
                        isn't in what you can do — it's in what you choose not to.
                    </p>

                    {/* Quote - also staggered */}
                    <blockquote ref={quoteRef} className="relative pl-5 border-l-2 border-hero-gold/30">
                        <p className="font-serif text-lg text-hero-text italic leading-relaxed">
                            "You will give the people of Earth an ideal to strive towards.
                            They will stumble. They will fall. But in time, they will join
                            you in the sun."
                        </p>
                        <footer className="mt-3 font-body text-xs tracking-[0.2em] uppercase text-hero-gold/60">
                            — Jor-El
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
