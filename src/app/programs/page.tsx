'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Award, BookOpen, UtensilsCrossed, Shirt, Building2, TrendingUp, LucideIcon } from 'lucide-react'

const programs = [
  {
    id: 'food',
    sector: 'Food Sector',
    title: 'Food Business Masterclass',
    icon: UtensilsCrossed,
    gradient: 'from-orange-500 to-amber-400',
    lightBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    duration: '12 Weeks',
    students: '150+ Enrolled',
    level: 'Beginner to Intermediate',
    modules: [
      'Introduction to Food Entrepreneurship',
      'Business Planning and Setup',
      'Branding and Packaging',
      'Pricing Strategy and Profit Margins',
      'Marketing and Social Media',
      'Sales Channels and Distribution',
      'Scaling Your Food Business',
      'Financial Management for Food Businesses',
    ],
    outcomes: [
      'Launch a profitable food business from scratch',
      'Build a recognizable food brand',
      'Develop a marketing strategy that drives sales',
      'Manage finances and scale sustainably',
    ],
  },
  {
    id: 'fashion',
    sector: 'Fashion Sector',
    title: 'Fashion Entrepreneurship Masterclass',
    icon: Shirt,
    gradient: 'from-pink-500 to-rose-400',
    lightBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
    duration: '12 Weeks',
    students: '120+ Enrolled',
    level: 'Beginner to Intermediate',
    modules: [
      'Fashion Industry Overview',
      'Brand Identity and Positioning',
      'Business Model Development',
      'Production and Supply Chain',
      'Online Store and E-commerce Setup',
      'Social Media Marketing for Fashion',
      'Customer Retention and Loyalty',
      'Scaling Your Fashion Brand',
    ],
    outcomes: [
      'Build and position a fashion brand',
      'Set up an online and offline sales presence',
      'Master fashion marketing on social media',
      'Scale from a small brand to a recognized business',
    ],
  },
  {
    id: 'real-estate',
    sector: 'Real Estate Sector',
    title: 'Real Estate Business Masterclass',
    icon: Building2,
    gradient: 'from-blue-500 to-indigo-400',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    duration: '12 Weeks',
    students: '100+ Enrolled',
    level: 'Beginner to Intermediate',
    modules: [
      'Real Estate Market Fundamentals',
      'Property Types and Valuation',
      'Real Estate Agency and Brokerage',
      'Client Acquisition and Relationship Management',
      'Deal Structuring and Negotiation',
      'Property Marketing and Listings',
      'Investment Analysis and ROI',
      'Building a Real Estate Business',
    ],
    outcomes: [
      'Navigate the Nigerian real estate market confidently',
      'Source, value and market properties',
      'Close deals and build a client base',
      'Build a sustainable real estate income stream',
    ],
  },
  {
    id: 'financial-literacy',
    sector: 'Financial Literacy',
    title: 'Financial Intelligence Masterclass',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-400',
    lightBg: 'bg-green-50',
    iconColor: 'text-green-500',
    duration: '12 Weeks',
    students: '130+ Enrolled',
    level: 'Beginner to Intermediate',
    modules: [
      'Money Mindset and Financial Foundations',
      'Personal Budgeting and Expense Management',
      'Business Financial Planning',
      'Cash Flow Management',
      'Savings and Emergency Funds',
      'Investment Principles and Vehicles',
      'Debt Management and Credit',
      'Building Long-Term Wealth',
    ],
    outcomes: [
      'Take full control of personal and business finances',
      'Build and manage a business budget',
      'Make smart investment decisions',
      'Create a long-term wealth-building plan',
    ],
  },
]

const highlights = [
  { icon: Clock, label: '12 Weeks Per Program' },
  { icon: Users, label: 'Expert-Led Training' },
  { icon: Award, label: 'Verified Certificate' },
  { icon: BookOpen, label: 'Practical Curriculum' },
]

export default function ProgramsPage() {
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
              Our Programs
            </span>
            <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-3 mb-6 leading-tight">
              Programs built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                real results
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-12">
              Each program is a structured 12-week masterclass built around
              practical business education, real market insights, and strategies
              you can implement immediately.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <Icon size={18} className="text-blue-400 shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{h.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs grid */}
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
              All Programs
            </span>
            <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-[#0a1628] mt-3 mb-4 leading-tight">
              Choose your masterclass
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every program includes structured modules, expert trainers,
              and a certificate of completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, i) => {
              const Icon = program.icon as LucideIcon
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-50 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                >
                  {/* Gradient top bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${program.gradient}`} />

                  {/* Header */}
                  <div className="p-8 border-b border-gray-50">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 ${program.lightBg} rounded-xl flex items-center justify-center`}>
                        <Icon size={22} className={program.iconColor} />
                      </div>
                      <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                        {program.level}
                      </span>
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                      {program.sector}
                    </span>
                    <h3 className="font-jakarta text-xl font-bold text-[#0a1628] mt-1 mb-4">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {program.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={14} /> {program.students}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex-1">
                    <h4 className="font-semibold text-[#0a1628] text-sm mb-4">
                      Program Modules
                    </h4>
                    <ul className="space-y-2.5 mb-8">
                      {program.modules.map((module, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-500">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${program.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                            <span className="text-white text-xs font-bold">{j + 1}</span>
                          </div>
                          {module}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-[#0a1628] text-sm mb-3">
                      What you'll achieve
                    </h4>
                    <ul className="space-y-2 mb-8">
                      {program.outcomes.map((outcome, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="px-8 pb-8">
                    <Link
                      href="/register"
                      className="group/btn w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
                    >
                      Enroll in this Program
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
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
                Not sure which program to pick?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Reach out to our team on WhatsApp and we'll help you choose
                the right sector based on your goals and interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1"
                >
                  Enroll Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="https://wa.me/234XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}