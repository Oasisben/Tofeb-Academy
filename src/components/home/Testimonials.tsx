import SectionHeader from '@/components/ui/shared/SectionHeader'
import AnimatedSection from '@/components/ui/shared/AnimatedSection'

const testimonials = [
  {
    name: 'Aisha Fadeyi',
    role: 'Food Sector Graduate · Lagos',
    initials: 'AF',
    text: 'Before Tofeb Academy, I had a passion for food but no idea how to turn it into a business. The program taught me branding, pricing, and marketing. I now run a profitable food brand with steady customers.',
    color: 'from-orange-500 to-amber-400',
  },
  {
    name: 'Emeka Balogun',
    role: 'Real Estate Graduate · Abuja',
    initials: 'EB',
    text: 'I closed my first property deal two weeks after completing the real estate program. The knowledge was practical, current, and directly applicable to the Nigerian market. Worth every naira.',
    color: 'from-blue-500 to-indigo-400',
  },
  {
    name: 'Tolu Nwachukwu',
    role: 'Fashion Sector Graduate · Ibadan',
    initials: 'TN',
    text: 'Tofeb did not just teach me fashion — it taught me how to run a fashion business. I now have my own brand, my own clients, and actual revenue. The business side of things was the game changer.',
    color: 'from-pink-500 to-rose-400',
  },
  {
    name: 'Sadia Musa',
    role: 'Financial Literacy Graduate · Kano',
    initials: 'SM',
    text: 'I finally understand how to manage cash flow, budget properly, and make smart investment decisions. This program transformed how I think about money and running a business.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    name: 'Chidi Okonkwo',
    role: 'Food Sector Graduate · Port Harcourt',
    initials: 'CO',
    text: 'The mentorship and community alone were worth it. I got connected to people who helped me scale faster than I could have done alone. Tofeb Academy is the real deal.',
    color: 'from-purple-500 to-violet-400',
  },
  {
    name: 'Fatima Aliyu',
    role: 'Fashion Sector Graduate · Kaduna',
    initials: 'FA',
    text: 'I was skeptical at first but the results speak for themselves. Within 3 months of graduating I had secured two brand partnerships. The program is practical, focused, and genuinely life-changing.',
    color: 'from-cyan-500 to-blue-400',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f4f8fd]">
      <div className="max-w-7xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeader
            tag="Success Stories"
            title="What our graduates say"
            subtitle="Real people. Real businesses. Real results."
            center
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold font-jakarta shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0a1628] text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
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