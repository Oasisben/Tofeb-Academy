'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 2000
          const steps = 60
          const increment = value / steps
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, duration / steps)
        } else {
          setCount(0)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gray-400 text-base">
            Trusted by entrepreneurs across Nigeria and beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#f4f8fd] hover:bg-[#0a1628] rounded-2xl p-8 text-center border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 cursor-default"
            >
              <div className="font-jakarta text-4xl md:text-5xl font-bold text-[#0a1628] group-hover:text-white transition-colors duration-500 mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-500 group-hover:text-blue-300 transition-colors duration-500 font-medium">
                {stat.label}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-600/0 group-hover:bg-blue-600/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}