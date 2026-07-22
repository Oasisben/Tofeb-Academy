'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@tofebacademy.com.ng',
    href: 'mailto:info@tofebacademy.com.ng',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 803 371 0031',
    href: 'tel:+2348033710031',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nigeria — serving students nationwide',
    href: null,
  },
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [form, setForm] = useState({ name: '', contact: '', message: '' })

  const handleSubmit = async () => {
    if (!form.name || !form.contact || !form.message) return
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

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
              Contact Us
            </span>
            <h1 className="font-jakarta text-5xl md:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              Let's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                talk
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
              Have a question about our programs? Want to know if Tofeb Academy
              is the right fit for you? Reach out — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#f4f8fd]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-jakarta text-3xl font-bold text-[#0a1628] mb-4">
                We're here to help
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Whether you have questions about enrollment, pricing, or which
                sector is right for you — our team responds within 24 hours.
              </p>

              {/* Contact items */}
              <div className="flex flex-col gap-5 mb-10">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          
                          <a
                            href={item.href}
                            className="text-[#0a1628] font-medium text-sm hover:text-blue-600 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#0a1628] font-medium text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* WhatsApp */}
              
              <a
                href="https://wa.me/2348033710031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with us on WhatsApp
              </a>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-blue-50">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Send size={28} className="text-green-500" />
                    </div>
                    <h3 className="font-jakarta text-2xl font-bold text-[#0a1628] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-jakarta text-2xl font-bold text-[#0a1628] mb-2">
                      Send us a message
                    </h3>
                    <p className="text-gray-400 text-sm mb-8">
                      We'll get back to you within 24 hours.
                    </p>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Amaka Obi"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
                          Email or Phone
                        </label>
                        <input
                          type="text"
                          value={form.contact}
                          onChange={(e) => setForm({ ...form, contact: e.target.value })}
                          placeholder="How can we reach you?"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Ask us anything about our programs..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition resize-none"
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={status === 'loading'}
                        className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}