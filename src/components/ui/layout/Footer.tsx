import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import Image from 'next/image'

const SECTORS = [
    { label: 'Food Sector', href: '/sectors' },
    { label: 'Fashion Sector', href: '/sectors' },
    { label: 'Real Estate Sector', href: '/sectors' },
]

export default function Footer() {
    return (
        <footer className="bg-[#0a1628] text-gray-400">
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
                    {/* Brand */}
                    <div>
                        <Link href="#" className="flex items-center gap-3">
                            <Image
                                src="/images/logo.png"
                                alt="Tofeb Academy Logo"
                                width={45}
                                height={50}
                                className="w-9 h-9 object-contain"
                            />
                            <span className="font-jakarta font-bold text-xl text-white tracking-tight">
                                Tofeb <span className="text-blue-400">Academy</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed max-w-xs">
                            Building tomorrow's entrepreneurs through practical business education and industry knowledge.
                        </p>
                        <p className="mt-4 text-xs text-gray-500 italic">
                            "Building Tomorrow's Entrepreneurs"
                        </p>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
                            Navigation
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sectors */}
                    <div>
                        <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
                            Our Sectors
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {SECTORS.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        href={s.href}
                                        className="text-sm hover:text-white transition-colors"
                                    >
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} Tofeb Academy. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="https://wa.me/2348033710031" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}