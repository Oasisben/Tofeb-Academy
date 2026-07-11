import SectionHeader from '@/components/ui/shared/SectionHeader'
import AnimatedSection from '@/components/ui/shared/AnimatedSection'

const steps = [
  {
    step: '01',
    title: 'Choose Your Sector',
    description:
      'Pick from Food, Fashion, Real Estate, or Financial Literacy — whichever aligns with your business goals and interests.',
  },
  {
    step: '02',
    title: 'Register & Enroll',
    description:
      'Complete your registration, make payment, and get instant access to your program schedule and community.',
  },
  {
    step: '03',
    title: 'Learn & Apply',
    description:
      'Go through practical, structured modules taught by industry experts. Apply what you learn in real time.',
  },
  {
    step: '04',
    title: 'Graduate & Grow',
    description:
      'Receive your certificate, join the alumni network, and launch or scale your business with ongoing support.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeader
            tag="How It Works"
            title="From enrollment to entrepreneurship"
            subtitle="A simple, structured path to building your business."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative">
                {/* Connector line */}
                {/* {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-full h-px bg-gradient-to-r from-blue-800 to-transparent z-0" />
                )} */}

                <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-blue-500/30 hover:bg-white/8 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="font-jakarta text-5xl font-bold text-blue-500/20 leading-none mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-jakarta font-bold text-white text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}