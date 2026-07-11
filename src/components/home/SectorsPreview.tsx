import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SECTORS } from '@/lib/constants'
import SectionHeader from '@/components/ui/shared/SectionHeader'
import AnimatedSection from '@/components/ui/shared/AnimatedSection'
import { LucideIcon } from 'lucide-react'

export default function SectorsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader
              tag="Our Sectors"
              title="Choose your path to entrepreneurship"
              subtitle="Four high-impact sectors. One goal — building a business that works."
            />
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold text-sm transition-colors shrink-0 mb-12"
            >
              View All Sectors <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECTORS.map((sector, i) => (
            <AnimatedSection key={sector.id} delay={i * 0.1}>
              <div className="group relative bg-[#0a1628] rounded-2xl p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/30 h-full">
                {/* Gradient blob */}
                <div
                  className={`absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br ${sector.color} opacity-10 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-5`}>
                    {(() => {
                      const Icon = sector.icon as LucideIcon
                      return <Icon size={22} className="text-white" />
                    })()}
                  </div>
                  {/* Content */}
                  <h3 className="font-jakarta font-bold text-white text-xl mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full">
                      Business Program
                    </span>
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white transition-colors group-hover:text-blue-400"
                    >
                      Enroll <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}