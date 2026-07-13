'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xs font-bold font-jakarta shrink-0`}>
          {testimonial.initials}
        </div>
        <div>
          <div className="font-semibold text-[#0a1628] text-sm">{testimonial.name}</div>
          <div className="text-gray-400 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  const perPage = isDesktop ? 3 : 1
  const total = Math.ceil(testimonials.length / perPage)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }

  // Detect screen size
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const visibleTestimonials = testimonials.slice(
    current * perPage,
    current * perPage + perPage
  )

  return (
    <section className="py-28 bg-[#f4f8fd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-600">
            Success Stories
          </span>
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-[#0a1628] mt-3 mb-4 leading-tight">
            Graduates who took the leap
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Real people. Real businesses. Real results.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#0a1628] hover:border-transparent flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {[...Array(total)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 h-2 bg-blue-600'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#0a1628] hover:border-transparent flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}