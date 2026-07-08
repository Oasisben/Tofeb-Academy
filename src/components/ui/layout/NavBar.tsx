'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import Image from 'next/image'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="#" className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="Tofeb Academy Logo"
                        width={45}
                        height={50}
                        className="w-9 h-9 object-contain"
                        priority
                    />
                    <span className="font-jakarta font-bold text-xl text-white tracking-tight">
                        Tofeb <span className="text-blue-400">Academy</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${pathname === link.href
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <Link
                    href="/register"
                    className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                    Register Now
                </Link>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-1"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-white/10">
                    <ul className="flex flex-col px-5 py-4 gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-3 text-sm font-medium border-b border-white/5 transition-colors ${pathname === link.href
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-3">
                            <Link
                                href="/register"
                                onClick={() => setIsOpen(false)}
                                className="block text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
                            >
                                Register Now
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}