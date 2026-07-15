'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Practicality',
    description: 'Every lesson is designed around real-world application. We teach what works in the actual market.',
  },
  {
    icon: Heart,
    title: 'Empowerment',
    description: 'We believe every individual has the potential to build something great with the right knowledge.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Growth is faster together. We build a network of entrepreneurs who support and elevate each other.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold our curriculum, our trainers, and our graduates to the highest standard of quality.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'We are committed to the continuous growth of our students, our programs, and our impact across Africa.',
  },
  {
    icon: Eye,
    title: 'Integrity',
    description: 'We operate with transparency and honesty in everything — from our curriculum to our pricing.',
  },
]

const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '3', label: 'Sectors' },
  { value: '92%', label: 'Success Rate' },
  { value: '4', label: 'Weeks Running' },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-3 mb-6 leading-tight">
              We exist to build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                entrepreneurs
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
              Tofeb Academy is a business and entrepreneurship academy dedicated
              to equipping aspiring entrepreneurs, business owners and professionals
              with practical business knowledge, industry insights and growth strategies.
            </p>
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Join the Academy
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="group bg-[#f4f8fd] hover:bg-[#0a1628] rounded-2xl p-10 h-full border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="w-12 h-12 bg-blue-600 group-hover:bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                <Target size={22} className="text-white" />
              </div>
              <h2 className="font-jakarta text-2xl font-bold text-[#0a1628] group-hover:text-white mb-4 transition-colors duration-500">
                Our Mission
              </h2>
              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                To empower individuals with practical business education,
                entrepreneurial skills and industry knowledge that drive
                sustainable business growth and economic impact across Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-[#0a1628] rounded-2xl p-10 h-full relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-500"
            >
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={22} className="text-blue-400" />
                </div>
                <h2 className="font-jakarta text-2xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  To become Africa's leading business and entrepreneurship
                  academy, producing innovative entrepreneurs and business
                  leaders who drive economic growth and create lasting impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#f4f8fd]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white hover:bg-[#0a1628] rounded-2xl p-8 text-center border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className="font-jakarta text-4xl font-bold text-[#0a1628] group-hover:text-white transition-colors duration-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-500 group-hover:text-blue-300 transition-colors duration-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-blue-600">
                Our Story
              </span>
              <h2 className="font-jakarta text-4xl font-bold text-[#0a1628] mt-3 mb-6 leading-tight">
                Built for a generation ready to build
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Tofeb Academy was founded on a simple but powerful observation —
                  too many talented, motivated people were failing in business not
                  because they lacked passion, but because they lacked the right
                  knowledge and structure.
                </p>
                <p>
                  We saw entrepreneurs with great ideas struggling with branding,
                  pricing, marketing, and cash flow. We saw people entering real
                  estate without understanding the market. We saw fashion
                  enthusiasts who could create beautiful products but could not
                  build a brand around them.
                </p>
                <p>
                  So we built Tofeb Academy — a place where ambition meets
                  practical education. Where you don't just learn about business,
                  you learn how to run one.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#0a1628] rounded-2xl p-10 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                  "We don't just teach business — we build businesses.
                  Every module, every lesson, every mentor is chosen
                  with one goal in mind: your success."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold font-jakarta">
                    TA
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Tofeb Academy</p>
                    <p className="text-gray-400 text-xs">Founding Philosophy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#f4f8fd]">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-blue-600">
              Core Values
            </span>
            <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-[#0a1628] mt-3 mb-4 leading-tight">
              What we stand for
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              The principles that guide everything we do at Tofeb Academy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group bg-white hover:bg-[#0a1628] rounded-2xl p-8 border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
                >
                  <div className="w-11 h-11 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-500">
                    <Icon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-jakarta font-bold text-[#0a1628] group-hover:text-white text-lg mb-2 transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-500">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a1628] rounded-3xl px-10 py-16 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-800/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-jakarta text-4xl font-bold text-white mb-4 leading-tight">
                Ready to build your business?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Join hundreds of graduates who chose Tofeb Academy to get the
                knowledge, skills, and confidence to succeed.
              </p>
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}