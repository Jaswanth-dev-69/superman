import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (e, id) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'glass-panel shadow-lg shadow-navy-950/50'
                : 'bg-transparent'
                }`}
        >
            <div className="grid grid-cols-3 items-center py-5" style={{ paddingLeft: '60px', paddingRight: '60px' }}>
                {/* Logo text - left */}
                <a
                    href="#home"
                    onClick={(e) => handleNav(e, 'home')}
                    className="font-display text-2xl tracking-[0.2em] text-white hover:text-gold-400 transition-colors duration-300 justify-self-start"
                >
                    KAL-EL
                </a>

                {/* Navigation - center */}
                <ul className="flex items-center justify-center gap-10">
                    <li>
                        <a
                            href="#home"
                            onClick={(e) => handleNav(e, 'home')}
                            className="font-body text-sm font-medium tracking-wider uppercase text-white/70 hover:text-gold-400 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#clark"
                            onClick={(e) => handleNav(e, 'clark')}
                            className="font-body text-sm font-medium tracking-wider uppercase text-white/70 hover:text-gold-400 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
                        >
                            Clark Kent
                        </a>
                    </li>
                    <li>
                        <a
                            href="#fortress"
                            onClick={(e) => handleNav(e, 'fortress')}
                            className="font-body text-sm font-medium tracking-wider uppercase text-white/70 hover:text-gold-400 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
                        >
                            Suits
                        </a>
                    </li>
                </ul>

                {/* Empty right column for balance */}
                <div />
            </div>
        </nav>
    )
}
