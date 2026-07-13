import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react'
import SectionHeader from '@/components/ui/shared/SectionHeader'
import AnimatedSection from '@/components/ui/shared/AnimatedSection'

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

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">About Us</span>
            <h1 className="font-jakarta text-5xl md:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              We exist to build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                entrepreneurs
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              Tofeb Academy is a business and entrepreneurship academy dedicated to equipping
              aspiring entrepreneurs, business owners and professionals with practical business
              knowledge, industry insights and growth strategies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-[#f4f8fd] rounded-2xl p-10 h-full">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Target size={22} className="text-white" />
                </div>
                <h2 className="font-jakarta text-2xl font-bold text-[#0a1628] mb-4">Our Mission</h2>
                <p className="text-gray-500 leading-relaxed">
                  To empower individuals with practical business education, entrepreneurial skills
                  and industry knowledge that drive sustainable business growth and economic impact across Africa.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-[#0a1628] rounded-2xl p-10 h-full relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Eye size={22} className="text-blue-400" />
                  </div>
                  <h2 className="font-jakarta text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-400 leading-relaxed">
                    To become Africa's leading business and entrepreneurship academy, producing
                    innovative entrepreneurs and business leaders who drive economic growth and create lasting impact.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f4f8fd]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeader tag="Our Story" title="Built for a generation ready to build" />
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Tofeb Academy was founded on a simple but powerful observation — too many talented,
                  motivated people were failing in business not because they lacked passion, but because
                  they lacked the right knowledge and structure.
                </p>
                <p>
                  We saw entrepreneurs with great ideas struggling with branding, pricing, marketing,
                  and cash flow. We saw people entering real estate without understanding the market.
                  We saw fashion enthusiasts who could create beautiful products but could not build a brand around them.
                </p>
                <p>
                  So we built Tofeb Academy — a place where ambition meets practical education.
                  Where you don't just learn about business, you learn how to run one.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Graduates' },
                  { value: '4', label: 'Sectors' },
                  { value: '92%', label: 'Success Rate' },
                  { value: '2+', label: 'Years Running' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                    <div className="font-jakarta text-4xl font-bold text-[#0a1628]">{stat.value}</div>
                    <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <AnimatedSection>
            <SectionHeader
              tag="Core Values"
              title="What we stand for"
              subtitle="The principles that guide everything we do at Tofeb Academy."
              center
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="bg-[#f4f8fd] rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group h-full">
                    <div className="w-11 h-11 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-jakarta font-bold text-[#0a1628] text-lg mb-2">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}