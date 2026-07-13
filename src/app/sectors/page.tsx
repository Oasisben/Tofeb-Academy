import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { UtensilsCrossed, Shirt, Building2, TrendingUp, LucideIcon } from 'lucide-react'
import SectionHeader from '@/components/ui/shared/SectionHeader'
import AnimatedSection from '@/components/ui/shared/AnimatedSection'

const sectors = [
  {
    id: 'food',
    title: 'Food Sector',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-amber-400',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
    description:
      'The food industry is one of the most lucrative and recession-proof sectors in Nigeria and across Africa. At Tofeb Academy, we teach you the business side of food — not cooking.',
    whatYouLearn: [
      'Food business planning and setup',
      'Branding and packaging strategy',
      'Pricing, costing and profit margins',
      'Marketing and customer acquisition',
      'Scaling and distribution channels',
      'Food business compliance and regulations',
    ],
    whoIsItFor:
      'Aspiring food entrepreneurs, existing food business owners looking to scale, and anyone who wants to build a profitable brand in the food industry.',
  },
  {
    id: 'fashion',
    title: 'Fashion Sector',
    icon: Shirt,
    color: 'from-pink-500 to-rose-400',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-500',
    description:
      'The fashion industry is booming across Africa. Tofeb Academy teaches you how to build, position, and grow a fashion brand — from business strategy to online sales.',
    whatYouLearn: [
      'Fashion brand identity and positioning',
      'Business model development',
      'Online and offline sales strategy',
      'Social media marketing for fashion',
      'Supply chain and production management',
      'Building customer loyalty and repeat sales',
    ],
    whoIsItFor:
      'Fashion enthusiasts, aspiring brand owners, and entrepreneurs who want to turn their passion for fashion into a profitable, scalable business.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Sector',
    icon: Building2,
    color: 'from-blue-500 to-indigo-400',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
    description:
      'Real estate remains one of the most reliable wealth-building vehicles in Nigeria. We teach you how to navigate the market, close deals, and build a property business.',
    whatYouLearn: [
      'Real estate market fundamentals',
      'Property sourcing and valuation',
      'Real estate agency and brokerage',
      'Investment strategies and ROI analysis',
      'Client acquisition and deal closing',
      'Property marketing and listings',
    ],
    whoIsItFor:
      'Aspiring real estate agents, property investors, and anyone who wants to build a sustainable income stream through the Nigerian property market.',
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500',
    description:
      'Financial intelligence is the foundation of every successful business. This program equips you with the money knowledge every entrepreneur needs to survive and thrive.',
    whatYouLearn: [
      'Personal and business budgeting',
      'Cash flow management',
      'Investment principles and strategies',
      'Business financial planning',
      'Debt management and credit',
      'Building long-term financial wealth',
    ],
    whoIsItFor:
      'Entrepreneurs, small business owners, professionals, and anyone who wants to take control of their finances and make smarter money decisions.',
  },
]

export default function SectorsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
              Our Sectors
            </span>
            <h1 className="font-jakarta text-5xl md:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Choose your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                sector
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              Four high-impact business sectors. Each program is built around
              practical knowledge, real market insights, and strategies that
              actually work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 space-y-24">
          {sectors.map((sector, i) => {
            const Icon = sector.icon as LucideIcon
            return (
              <AnimatedSection key={sector.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
                  {/* Info */}
                  <div>
                    <div className={`w-14 h-14 ${sector.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon size={26} className={sector.iconColor} />
                    </div>
                    <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                      {sector.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {sector.description}
                    </p>
                    <p className="text-sm text-gray-400 mb-8">
                      <span className="font-semibold text-[#0a1628]">Who is this for? </span>
                      {sector.whoIsItFor}
                    </p>
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
                    >
                      Enroll in {sector.title} <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* What you learn */}
                  <div className="bg-[#f4f8fd] rounded-2xl p-8 border border-gray-100">
                    <h3 className="font-jakarta font-bold text-[#0a1628] text-lg mb-6">
                      What you'll learn
                    </h3>
                    <ul className="space-y-4">
                      {sector.whatYouLearn.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${sector.color} flex items-center justify-center shrink-0 mt-0.5`}>
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {i < sectors.length - 1 && (
                  <div className="mt-24 border-b border-gray-100" />
                )}
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f4f8fd]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <AnimatedSection>
            <SectionHeader
              tag="Ready to Enroll?"
              title="Pick your sector and start building"
              subtitle="All programs are practical, structured, and designed to get you results fast."
              center
            />
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Register Now <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}