'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, UtensilsCrossed, Shirt, Building2, TrendingUp, LucideIcon } from 'lucide-react'

const sectors = [
  {
    id: 'food',
    title: 'Food Sector',
    tagline: 'Build a profitable food business from the ground up.',
    icon: UtensilsCrossed,
    gradient: 'from-orange-500 to-amber-400',
    lightBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    description:
      'The food industry is one of the most lucrative and recession-proof sectors in Nigeria and across Africa. At Tofeb Academy, we teach you the business side of food — branding, marketing, scaling, and management.',
    whatYouLearn: [
      'Food business planning and setup',
      'Branding and packaging strategy',
      'Pricing, costing and profit margins',
      'Marketing and customer acquisition',
      'Scaling and distribution channels',
      'Food business compliance and regulations',
    ],
    whoIsItFor: 'Aspiring food entrepreneurs, existing food business owners looking to scale, and anyone who wants to build a profitable brand in the food industry.',
  },
  {
    id: 'fashion',
    title: 'Fashion Sector',
    tagline: 'Turn your fashion passion into a thriving brand.',
    icon: Shirt,
    gradient: 'from-pink-500 to-rose-400',
    lightBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
    description:
      'The fashion industry is booming across Africa. Tofeb Academy teaches you how to build, position, and grow a fashion brand — from business strategy to online sales and brand identity.',
    whatYouLearn: [
      'Fashion brand identity and positioning',
      'Business model development',
      'Online and offline sales strategy',
      'Social media marketing for fashion',
      'Supply chain and production management',
      'Building customer loyalty and repeat sales',
    ],
    whoIsItFor: 'Fashion enthusiasts, aspiring brand owners, and entrepreneurs who want to turn their passion for fashion into a profitable, scalable business.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Sector',
    tagline: 'Navigate property markets and build lasting wealth.',
    icon: Building2,
    gradient: 'from-blue-500 to-indigo-500',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    description:
      'Real estate remains one of the most reliable wealth-building vehicles in Nigeria. We teach you how to navigate the market, close deals, build a property business, and create sustainable income.',
    whatYouLearn: [
      'Real estate market fundamentals',
      'Property sourcing and valuation',
      'Real estate agency and brokerage',
      'Investment strategies and ROI analysis',
      'Client acquisition and deal closing',
      'Property marketing and listings',
    ],
    whoIsItFor: 'Aspiring real estate agents, property investors, and anyone who wants to build a sustainable income stream through the Nigerian property market.',
  },
]

export default function SectorsPage() {
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
              Our Sectors
            </span>
            <h1 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-3 mb-6 leading-tight">
              Choose your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                path
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              Four high-impact business sectors. Each program is built around
              practical knowledge, real market insights, and strategies that
              actually work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sector overview cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((sector, i) => {
              const Icon = sector.icon as LucideIcon
              return (
                <motion.a
                  key={sector.id}
                  href={`#${sector.id}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group bg-[#f4f8fd] hover:bg-[#0a1628] rounded-2xl p-6 border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 cursor-pointer"
                >
                  <div className={`w-11 h-11 ${sector.lightBg} group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500`}>
                    <Icon size={20} className={`${sector.iconColor} group-hover:text-white transition-colors duration-500`} />
                  </div>
                  <h3 className="font-jakarta font-bold text-[#0a1628] group-hover:text-white text-base mb-1 transition-colors duration-500">
                    {sector.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-xs leading-relaxed transition-colors duration-500">
                    {sector.tagline}
                  </p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full sector sections */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 pb-24">
          <div className="space-y-6">
            {sectors.map((sector, i) => {
              const Icon = sector.icon as LucideIcon
              return (
                <motion.div
                  key={sector.id}
                  id={sector.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 0.7 }}
                  className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-500"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>

                    {/* Info panel */}
                    <div className={`p-10 md:p-14 ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                      <div className={`w-14 h-14 ${sector.lightBg} rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon size={26} className={sector.iconColor} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent`}>
                        {sector.title}
                      </span>
                      <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0a1628] mt-2 mb-4 leading-tight">
                        {sector.tagline}
                      </h2>
                      <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                        {sector.description}
                      </p>
                      <p className="text-sm text-gray-400 mb-8">
                        <span className="font-semibold text-[#0a1628]">Who is this for? </span>
                        {sector.whoIsItFor}
                      </p>
                      <Link
                        href="/register"
                        className="group/btn inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
                      >
                        Enroll in {sector.title}
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>

                    {/* What you learn panel */}
                    <div className={`bg-[#f4f8fd] p-10 md:p-14 ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <h3 className="font-jakarta font-bold text-[#0a1628] text-xl mb-8">
                        What you'll learn
                      </h3>
                      <ul className="space-y-4">
                        {sector.whatYouLearn.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: '-60px' }}
                            transition={{ duration: 0.4, delay: j * 0.07 }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${sector.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f4f8fd]">
        <div className="max-w-3xl mx-auto px-5 text-center">
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
                Ready to pick your sector?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                All programs are practical, structured, and designed to get you
                results fast. Enroll today and start building.
              </p>
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                Register Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}