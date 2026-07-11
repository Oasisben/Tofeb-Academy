import { GraduationCap, Briefcase, Users, TrendingUp, Award, Clock } from 'lucide-react'
import SectionHeader from '@/components/ui/shared/SectionHeader'
import AnimatedSection from '@/components/ui/shared/AnimatedSection'

const reasons = [
  {
    icon: GraduationCap,
    title: 'Practical Business Education',
    description:
      'Every module is built around real market realities. No fluff, no theory — just knowledge you can apply immediately to build and grow a business.',
  },
  {
    icon: Briefcase,
    title: 'Industry Expert Trainers',
    description:
      'Learn directly from entrepreneurs and professionals who have built successful businesses in your chosen sector.',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Focused Curriculum',
    description:
      'Our programs cover everything from starting a business to scaling it — branding, marketing, finance, and management all in one place.',
  },
  {
    icon: Users,
    title: 'Thriving Alumni Network',
    description:
      'Join a community of driven graduates who collaborate, refer, and support each other long after the program ends.',
  },
  {
    icon: Award,
    title: 'Verified Certificate',
    description:
      'Earn a certificate of completion that validates your training and adds credibility to your business or professional profile.',
  },
  {
    icon: Clock,
    title: 'Flexible Learning Schedule',
    description:
      'Study at your own pace without dropping your current commitments. Our programs are designed to fit around your life.',
  },
]

export default function WhyTofeb() {
  return (
    <section className="py-24 bg-[#f4f8fd]">
      <div className="max-w-7xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeader
            tag="Why Tofeb Academy"
            title="Everything you need to build a successful business"
            subtitle="We don't just teach — we equip you with the tools, knowledge, and community to actually win."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-jakarta font-bold text-[#0a1628] text-lg mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}