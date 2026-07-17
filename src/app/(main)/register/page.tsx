'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import RegistrationForm from '@/components/register/RegistrationForm'

const perks = [
  'Access to full 4-week program curriculum',
  'Live sessions with industry expert trainers',
  'Verified certificate of completion',
  'Lifetime access to alumni community',
  'Post-training business mentorship support',
  'Confirmation email sent immediately after registration',
]

const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '3', label: 'Sectors' },
  { value: '92%', label: 'Success Rate' },
  { value: '24hrs', label: 'Response Time' },
]

export default function RegisterPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="bg-[#0a1628] py-28 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[140px] pointer-events-none"
        />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
              Enrollment
            </span>
            <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-3 mb-6 leading-tight">
              Start your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                application
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              Fill in your details below. Our team will reach out within 24
              hours to confirm your spot and share everything you need to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Perks */}
      <section className="py-24 bg-[#f4f8fd]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-jakarta text-3xl font-bold text-[#0a1628] mb-4">
                What you get when you enroll
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Every Tofeb Academy program is designed to give you everything
                you need to start, run, and grow a successful business in your
                chosen sector.
              </p>

              <ul className="space-y-4 mb-10">
                {perks.map((perk, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{perk}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group bg-white hover:bg-[#0a1628] rounded-2xl p-5 border border-gray-100 hover:border-transparent text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20"
                  >
                    <div className="font-jakarta text-3xl font-bold text-[#0a1628] group-hover:text-white transition-colors duration-500">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-300 text-xs mt-1 transition-colors duration-500">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-blue-50">
                <h3 className="font-jakarta text-2xl font-bold text-[#0a1628] mb-2">
                  Registration Form
                </h3>
                <p className="text-gray-400 text-sm mb-8">
                  All fields are required unless marked optional.
                </p>
                <RegistrationForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}