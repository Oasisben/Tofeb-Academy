'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const points = [
  'Practical, expert-led business education',
  'Certificate of completion included',
  'Join a thriving alumni community',
  'Post-training mentorship and support',
]

export default function HomeCTA() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#0a1628] rounded-3xl overflow-hidden"
        >
          {/* Background orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-800/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-10 md:px-16 py-16 md:py-20">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
                Ready to Start?
              </span>
              <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
                Your business journey starts here
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Join hundreds of entrepreneurs who chose Tofeb Academy to build
                the knowledge, skills, and confidence to run a successful business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 text-base"
                >
                  Apply Now
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/40 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 text-base"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            {/* Right — checklist */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-jakarta font-bold text-white text-lg mb-6">
                What's included in every program
              </h3>
              <ul className="space-y-4">
                {points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <CheckCircle size={18} className="text-blue-400 shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {['AF', 'EB', 'TN', 'SM'].map((init, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-[#0a1628] flex items-center justify-center text-white text-xs font-bold font-jakarta"
                      >
                        {init}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Join <span className="text-white font-semibold">500+ graduates</span> already building their businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}