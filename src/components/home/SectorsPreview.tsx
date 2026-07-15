'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, UtensilsCrossed, Shirt, Building2, TrendingUp, LucideIcon } from 'lucide-react'

const sectors = [
  {
    id: 'food',
    title: 'Food Sector',
    description: 'Build and scale a profitable food business. Learn branding, marketing, pricing, and how to grow beyond your kitchen.',
    icon: UtensilsCrossed,
    gradient: 'from-orange-500 to-amber-400',
    lightBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    id: 'fashion',
    title: 'Fashion Sector',
    description: 'Turn your fashion passion into a real brand. From product to positioning, learn every step of building a fashion business.',
    icon: Shirt,
    gradient: 'from-pink-500 to-rose-400',
    lightBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Navigate the Nigerian property market with confidence. Learn how to source deals, close sales, and build lasting wealth.',
    icon: Building2,
    gradient: 'from-blue-500 to-indigo-500',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
]

export default function SectorsPreview() {
  return (
    <section className="py-28 bg-[#f4f8fd] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-blue-600">
              Our Programs
            </span>
            <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-[#0a1628] mt-3 leading-tight">
              Choose your path
            </h2>
            <p className="text-gray-400 text-lg mt-3 leading-relaxed">
              Three sectors. One mission — equipping you with the business
              knowledge to build something real.
            </p>
          </div>
          <Link
            href="/sectors"
            className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold text-sm transition-colors shrink-0"
          >
            Explore All Sectors
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon as LucideIcon
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-100/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Background glow */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-all duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-13 h-13 ${sector.lightBg} rounded-2xl flex items-center justify-center mb-6 w-14 h-14 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={sector.iconColor} />
                  </div>

                  <h3 className="font-jakarta text-xl font-bold text-[#0a1628] mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  <Link
                    href="/register"
                    className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Enroll Now
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}