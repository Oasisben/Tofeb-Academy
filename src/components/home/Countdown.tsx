'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

function getTimeLeft(target: Date): TimeLeft {
    const diff = target.getTime() - new Date().getTime()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
    }
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-white/10 border border-white/20 rounded-2xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
                <span className="font-jakarta text-2xl md:text-3xl font-bold text-white">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-blue-300 text-xs font-medium mt-2 uppercase tracking-widest">
                {label}
            </span>
        </div>
    )
}

export default function Countdown() {
    const [target] = useState(() => {
        const d = new Date()
        d.setDate(d.getDate() + 7)
        return d
    })
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(target))

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(target))
        }, 1000)
        return () => clearInterval(timer)
    }, [target])

    return (
        <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#102040] to-[#1a3a6b]">
            <div className="max-w-4xl mx-auto px-5 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-amber-300 text-sm font-medium">Early Bird Offer — Limited Slots</span>
                </div>

                <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Enrollment closes soon
                </h2>
                <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                    Secure your spot at the early bird rate before the deadline. Once slots are filled, registration closes.
                </p>

                {/* Timer */}
                <div className="flex items-start justify-center gap-2 md:gap-6 mb-12 flex-wrap">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <span className="text-white/40 text-3xl font-light mt-4">:</span>
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <span className="text-white/40 text-3xl font-light mt-4">:</span>
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <span className="text-white/40 text-3xl font-light mt-4">:</span>
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>

                {/* CTA */}
                <Link
                    href="/register"
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0a1628] font-bold px-10 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5 text-base"
                >
                    Claim Your Spot Now <ArrowRight size={18} />
                </Link>

                <p className="text-gray-500 text-sm mt-6">
                    No hidden fees. Cancel anytime before enrollment starts.
                </p>
            </div>
        </section>
    )
}