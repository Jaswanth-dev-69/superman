import { useRef } from 'react'
import CircularGallery from '../components/core/CircularGallery'

const items = [
    {
        image: '/images/looppic/1.png',
        link: '#',
        title: 'Recovery Suit',
        description: 'Solar regeneration and stealth capabilities.'
    },
    {
        image: '/images/looppic/2.png',
        link: '#',
        title: 'Ancestral Armor',
        description: 'Heavily plated tactical armor with heritage crest.'
    },
    {
        image: '/images/looppic/3.png',
        link: '#',
        title: 'Armor Variant II',
        description: 'Reinforced plating for high-impact combat.'
    },
    {
        image: '/images/looppic/4.png',
        link: '#',
        title: 'Red Sun Variant',
        description: 'Aggressive stealth with unstable energy conduits.'
    },
    {
        image: '/images/looppic/5.png',
        link: '#',
        title: 'Arcane Glyph',
        description: 'Mystical armor resisting magic and enhancing aura.'
    },
    {
        image: '/images/looppic/6.png',
        link: '#',
        title: 'Imperial Ceremonial',
        description: 'Ornate gold filigree worn by the High Council.'
    },
    {
        image: '/images/looppic/1feebfeb-7346-4b8f-9fee-a38d435fd647.png',
        link: '#',
        title: 'Kryptonian Legacy',
        description: 'The enduring symbol of hope across the stars.'
    }
];

export default function Fortress() {
    return (
        <div className="relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden bg-hero-black" id="fortress-container">
            {/* Title Overlay */}
            <div className="absolute top-10 left-0 w-full z-20 flex justify-center pointer-events-none">
                <h2 className="font-display text-4xl md:text-6xl text-hero-text tracking-[0.2em] text-center mix-blend-difference">
                    THE FORTRESS <span className="text-hero-gold">ARCHIVES</span>
                </h2>
            </div>

            {/* Circular Gallery Component */}
            <div className="w-full h-full relative z-10">
                <CircularGallery items={items} bend={4} scrollSpeed={3} borderRadius={0.05} font="bold 30px Figtree" />
            </div>
        </div>
    )
}
