'use client'

import { motion } from 'framer-motion'
import { Rocket, TrendingUp, Users, Briefcase } from 'lucide-react'

const cards = [
  {
    icon: Rocket,
    title: 'Start with confidence',
    description:
      'No guesswork. No trial and error. Get the exact knowledge and structure you need to launch your business the right way from day one.',
    color: 'from-blue-500 to-blue-600',
    delay: 0,
  },
  {
    icon: TrendingUp,
    title: 'Grow sustainably',
    description:
      'Learn how to build systems, manage finances, and scale your business without burning out or losing control of your growth.',
    color: 'from-indigo-500 to-blue-500',
    delay: 0.1,
  },
  {
    icon: Users,
    title: 'Learn from experts',
    description:
      'Every trainer at Tofeb Academy has built a real business. You learn from people who have done it — not just studied it.',
    color: 'from-blue-600 to-indigo-600',
    delay: 0.2,
  },
  {
    icon: Briefcase,
    title: 'Build real businesses',
    description:
      'This is not a certificate program for your CV. This is practical, hands-on education designed to produce entrepreneurs who actually earn.',
    color: 'from-blue-700 to-blue-500',
    delay: 0.3,
  },
]

export default function WhyTofeb() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-600">
            Why it matters
          </span>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-[#0a1628] mt-3 mb-4 leading-tight">
            Why thousands dream of building their own business
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Freedom. Income. Impact. The dream is real — and Tofeb Academy gives
            you the roadmap to get there.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 0.6, delay: card.delay }}
                className="group relative bg-[#f4f8fd] hover:bg-[#0a1628] rounded-2xl p-8 border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/25 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full blur-2xl transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="font-jakarta text-xl font-bold text-[#0a1628] group-hover:text-white mb-3 transition-colors duration-500">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-500">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}