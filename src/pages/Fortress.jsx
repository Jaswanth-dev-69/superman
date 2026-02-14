import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(Flip, ScrollTrigger)

const images = [
    '/images/looppic/1.png',
    '/images/looppic/2.png',
    '/images/looppic/3.png',
    '/images/looppic/4.png',
    '/images/looppic/5.png',
    '/images/looppic/6.png',
]

// Duplicate images to create seamless loop
const allImages = [...images, ...images]

const suitData = {
    0: {
        title: "Recovery Suit",
        desc: "A sleek, monochromatic black suit designed for solar regeneration. Features a metallic silver shield that absorbs ambient radiation to accelerate healing.",
        tags: ["Regeneration", "Solar Absorption", "Stealth"]
    },
    1: {
        title: "Ancestral Armor",
        desc: "Heavily plated tactical armor bearing a golden ancestral bird crest instead of the traditional S-shield. Forged for high-impact combat situations.",
        tags: ["Tactical", "Reinforced", "Heritage"]
    },
    2: {
        title: "Ancestral Armor II",
        desc: "Heavily plated tactical armor bearing a golden ancestral bird crest instead of the traditional S-shield. Focusing on durability and strength.",
        tags: ["Heavy Plating", "Defense", "Strength"]
    },
    3: {
        title: "Red Sun Variant",
        desc: "An aggressive stealth variant pulsing with unstable red energy conduits across the torso. Designed for operations under red sun radiation.",
        tags: ["Stealth", "Unstable Energy", "Red Sun"]
    },
    4: {
        title: "Arcane Glyph Suit",
        desc: "A mystical armor infused with glowing blue arcane Kryptonian glyphs. Provides resistance against magical attacks and enhances bio-electric aura.",
        tags: ["Mystical", "Arcane Protection", "Glyphs"]
    },
    5: {
        title: "Imperial Ceremonial",
        desc: "Ornate ceremonial imperial armor garnished with heavy gold filigree and a clasped cloak. Worn by the High Council of Krypton during planetary alignments.",
        tags: ["Ceremonial", "Imperial", "Gold Filigree"]
    }
}

export default function Fortress() {
    const containerRef = useRef(null)
    const firstStripRef = useRef(null)
    const secondStripRef = useRef(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const loopRef = useRef(null)
    const videoRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Effect
            gsap.to(videoRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            })
            gsap.to(titleRef.current, {
                yPercent: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        // Loop ALWAYS runs now, even when image is selected
        let xPercent = 0
        let direction = -1

        const animate = () => {
            if (xPercent <= -100) xPercent = 0
            if (xPercent > 0) xPercent = -100

            if (firstStripRef.current) gsap.set(firstStripRef.current, { xPercent: xPercent })
            if (secondStripRef.current) gsap.set(secondStripRef.current, { xPercent: xPercent })

            xPercent += 0.02 * direction
            loopRef.current = requestAnimationFrame(animate)
        }
        loopRef.current = requestAnimationFrame(animate)

        return () => {
            if (loopRef.current) cancelAnimationFrame(loopRef.current)
        }
    }, [])

    const handleImageClick = (src, index, element) => {
        if (selectedImage) return

        // GSAP Flip State Capture
        const state = Flip.getState(element)

        setSelectedImage(src)
        setSelectedIndex(index)

        // Give React a moment to render the "target" card in the detail view
        // Then animate from source state to target state
        // Note: For simple React state switches, standard FLIP is tricky without layout-effect timing.
        // We'll trust GSAP's from() or just simple CSS fade-in for now to be robust.
        // If we want true Flip, we need the target to exist.
    }

    const handleClose = () => {
        setSelectedImage(null)
        setSelectedIndex(null)
    }

    const currentSuit = selectedIndex !== null ? suitData[selectedIndex] : null

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-screen overflow-hidden transition-colors duration-500 ${selectedImage ? 'bg-navy-950' : 'bg-black'}`}
        >
            {/* ── Background Video (Fades out when image selected) ── */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${selectedImage ? 'opacity-0 delay-0' : 'opacity-100 delay-300'}`}>
                <video
                    ref={videoRef}
                    src="/videos/3rdpgaebg.webm"
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 scale-125" // Scale up for parallax room
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, transparent 0%, #000 90%)'
                    }}
                />
                {/* ── Title ── */}
                <div ref={titleRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="font-display text-4xl md:text-6xl text-white/90 tracking-[0.2em] text-center">
                        THE FORTRESS <span className="text-crimson-500">OF SOLITUDE</span>
                    </h2>
                </div>
            </div>

            {/* ── Content View (Text + Selected Card) ── */}
            <div className={`absolute inset-0 z-20 flex items-center justify-center px-10 md:px-20 transition-all duration-500 ${selectedImage ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left: Text Content */}
                    <div className={`space-y-6 transition-all duration-700 delay-300 transform ${selectedImage ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <h3 className="font-display text-4xl text-white">{currentSuit?.title || "Unknown Artifact"}</h3>
                        <p className="font-body text-white/70 leading-relaxed max-w-md text-lg">
                            {currentSuit?.desc || "Data corrupted. Analyzing remnant energy signature..."}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-4">
                            {currentSuit?.tags?.map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-xs font-body uppercase tracking-wider text-white/60">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <button
                            onClick={handleClose}
                            className="mt-8 text-sm font-body uppercase tracking-widest text-crimson-400 hover:text-white transition-colors"
                        >
                            ← Return to Stream
                        </button>
                    </div>

                    {/* Right: The Selected Card */}
                    <div className={`relative aspect-[3/4] md:aspect-square bg-black rounded-2xl overflow-hidden shadow-2xl shadow-navy-950 border border-white/10 transition-all duration-700 transform ${selectedImage ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-gradient-to-b from-transparent to-black/80">
                            <h4 className="font-display text-xl text-white opacity-80">{currentSuit?.title}</h4>
                            <p className="font-body text-sm text-white/50 leading-relaxed max-w-[80%]">

                            </p>
                        </div>
                        {selectedImage && (
                            <img
                                src={selectedImage}
                                alt={currentSuit?.title || "Selected Memory"}
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                        )}
                    </div>

                </div>
            </div>

            {/* ── Infinite Loop at Bottom (Always Visible, dimmned when selected) ── */}
            <div className={`absolute bottom-10 left-0 w-full overflow-hidden flex whitespace-nowrap transition-opacity duration-500 ${selectedImage ? 'opacity-30 pointer-events-none blur-sm' : 'opacity-100'}`}>
                {/* First Strip */}
                <div ref={firstStripRef} className="flex gap-10 pr-10 flex-shrink-0">
                    {images.map((src, i) => (
                        <div
                            key={`s1-${i}`}
                            onClick={(e) => handleImageClick(src, i, e.currentTarget)}
                            className="w-[240px] h-[160px] flex-shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-crimson-500/50 transition-colors duration-300 cursor-pointer"
                        >
                            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-500" />
                        </div>
                    ))}
                </div>

                {/* Second Strip */}
                <div ref={secondStripRef} className="flex gap-10 pr-10 flex-shrink-0">
                    {images.map((src, i) => (
                        <div
                            key={`s2-${i}`}
                            onClick={(e) => handleImageClick(src, i, e.currentTarget)}
                            className="w-[240px] h-[160px] flex-shrink-0 rounded-lg overflow-hidden border border-white/10 hover:border-crimson-500/50 transition-colors duration-300 cursor-pointer"
                        >
                            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
