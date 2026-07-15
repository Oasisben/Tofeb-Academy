'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const sectors = [
  'Food Business',
  'Fashion Business',
  'Real Estate',
  
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a1628] flex flex-col justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-600 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] bg-blue-800 rounded-full blur-[140px]"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">
              Now Enrolling — 2026 Cohort
            </span>
          </motion.div>

          {/* Headline — staggered lines */}
          <div className="mb-8 space-y-2">
            {['Building', "Tomorrow's", 'Entrepreneurs.'].map((word, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: 'easeOut' }}
              >
                <span
                  className={`block font-jakarta font-bold leading-[1.05] tracking-tight ${
                    i === 2
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200'
                      : 'text-white'
                  } text-6xl md:text-7xl lg:text-8xl`}
                >
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl"
          >
            Learn practical business strategies from industry experts — and build
            something that actually lasts.
          </motion.p>

          {/* Sector chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {sectors.map((s) => (
              <span
                key={s}
                className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full px-4 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {s}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 text-base"
            >
              Join the Program
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/40 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base hover:bg-white/5"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}