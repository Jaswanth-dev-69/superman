import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60)

            // Simple scroll spy logic
            const sections = ['home', 'clark', 'fortress', 'lastpage']
            for (const section of sections) {
                const el = document.getElementById(section)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section)
                    }
                }
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (e, id) => {
        e.preventDefault()
        setActiveSection(id)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const items = [
        { label: "Home", id: "home" },
        { label: "Kal-el", id: "clark" },
        { label: "Suits", id: "fortress" },
        { label: "Legacy", id: "lastpage" }
    ]

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-8 py-2 ${activeSection !== 'home' ? 'glass-panel' : ''
                }`}
        >
            <ul className="flex items-center gap-8">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => handleNav(e, item.id)}
                            className={`font-body text-sm font-medium tracking-wider uppercase transition-colors duration-300 relative py-1
                                ${activeSection === item.id ? 'text-hero-text' : 'text-hero-textSoft hover:text-hero-text'}
                            `}
                        >
                            {item.label}
                            {/* Underline */}
                            <span
                                className={`absolute bottom-0 left-0 h-[2px] bg-hero-gold transition-all duration-300 ease-out
                                    ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
                                `}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
