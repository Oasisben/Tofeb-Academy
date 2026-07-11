import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/shared/AnimatedSection'

export default function HomeCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-5">
        <AnimatedSection>
          <div className="relative bg-[#0a1628] rounded-3xl px-8 py-16 md:px-16 text-center overflow-hidden">
            {/* Background blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-800/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4">
                Ready to Start?
              </span>
              <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Your business journey <br />
                starts here
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join hundreds of entrepreneurs who chose Tofeb Academy to build
                the knowledge, skills, and confidence to run a successful business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 text-base"
                >
                  Apply Now <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all text-base"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}