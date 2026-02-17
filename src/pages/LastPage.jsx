import { useRef } from 'react'
import ImageTrail from '../components/ImageTrail'

const trailImages = [
    '/images/lastpage/pic1.jpg',
    '/images/lastpage/pic2.jpg',
    '/images/lastpage/pic3.jpg',
    '/images/lastpage/pic4.jpg',
    '/images/lastpage/pic5.jpg',
    '/images/lastpage/pic6.jpg',
    '/images/lastpage/pic7.jpg',
    '/images/lastpage/pic8.jpg',
    '/images/lastpage/pic9.jpg',
    '/images/lastpage/pic10.jpg',
]

export default function LastPage() {
    const containerRef = useRef(null)

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-hero-black"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 opacity-70"
                style={{
                    backgroundImage: "url('/images/lastpagepic.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    pointerEvents: 'none'
                }}
            />

            {/* Image Trail Effect Overlay */}
            <div className="absolute inset-0 z-20">
                <ImageTrail items={trailImages} variant={8} />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                <h2 className="font-display text-4xl md:text-8xl text-hero-text mix-blend-overlay opacity-50 tracking-widest uppercase">
                    Legacy
                </h2>
            </div>
        </div>
    )
}
