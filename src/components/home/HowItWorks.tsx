'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Choose Your Sector',
    description: 'Pick the business sector that excites you most — Food, Fashion or Real Estate.',
  },
  {
    step: '02',
    title: 'Register & Enroll',
    description: 'Complete your registration in minutes. Our team confirms your spot and shares everything you need to get started.',
  },
  {
    step: '03',
    title: 'Learn & Apply',
    description: 'Go through structured, expert-led modules and apply your knowledge in real time as you build your business.',
  },
  {
    step: '04',
    title: 'Graduate & Grow',
    description: 'Receive your certificate, join our alumni network, and keep building with ongoing support from the Tofeb community.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#0a1628] relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
            How It Works
          </span>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            From enrollment to entrepreneur
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Four simple steps between you and the business education that changes everything.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative"
            >

              <div className="relative z-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/30 h-full">
                {/* Step number */}
                <div className="font-jakarta text-6xl font-bold text-blue-500/15 group-hover:text-blue-500/25 leading-none mb-5 transition-colors duration-300">
                  {step.step}
                </div>

                <h3 className="font-jakarta font-bold text-white text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}