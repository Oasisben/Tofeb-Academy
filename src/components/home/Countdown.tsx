'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
      <div className="relative bg-white/5 border border-white/15 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden group">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
        <span className="font-jakarta text-2xl md:text-3xl font-bold text-white relative z-10">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-blue-300/70 text-xs font-medium mt-2.5 uppercase tracking-widest">
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
    const timer = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(timer)
  }, [target])

  return (
    <section className="py-28 bg-[#0a1628] relative overflow-hidden">
      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-300 text-sm font-medium">
            Early Bird Offer — Limited Slots Available
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-jakarta text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Don't miss your spot
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg mb-14 max-w-xl mx-auto leading-relaxed"
        >
          Enrollment closes soon. Secure your spot at the early bird rate before
          the deadline — once slots are filled, registration closes.
        </motion.p>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-start justify-center gap-3 md:gap-5 mb-14"
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="text-white/20 text-3xl font-light mt-4 md:mt-5">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="text-white/20 text-3xl font-light mt-4 md:mt-5">:</span>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <span className="text-white/20 text-3xl font-light mt-4 md:mt-5">:</span>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/register"
            className="group inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0a1628] font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/30 hover:-translate-y-1 text-base"
          >
            Claim Your Spot Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
          <p className="text-gray-600 text-sm mt-5">
            No hidden fees. Our team will reach out within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}