'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FAQS } from '@/lib/constants'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? 'border-blue-200 shadow-lg shadow-blue-50' : 'border-gray-100'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left bg-white hover:bg-[#f4f8fd] transition-colors duration-200"
      >
        <span className="font-jakarta font-semibold text-[#0a1628] text-base leading-snug">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
          open ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
        }`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-6 bg-white">
              <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0a1628] py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-blue-400">
              FAQ
            </span>
            <h1 className="font-jakarta text-5xl md:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Got{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                questions?
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              Everything you need to know about Tofeb Academy, our programs,
              and how enrollment works. Can't find your answer? Reach us on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-[#f4f8fd]">
        <div className="max-w-3xl mx-auto px-5">
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-[#0a1628] rounded-2xl p-10 text-center relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-jakarta text-2xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Our team is available to answer any questions you have before you enroll.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                
                <a
                  href="https://wa.me/234XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
                >
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/40 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
                >
                  Contact Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}