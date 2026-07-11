import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import WhyTofeb from '@/components/home/WhyTofeb'
import SectorsPreview from '@/components/home/SectorsPreview'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import Countdown from '@/components/home/Countdown'
import HomeCTA from '@/components/home/HomeCTA'


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyTofeb />
      <SectorsPreview />
      <HowItWorks />
      <Testimonials />
      <Countdown />
      <HomeCTA />
    </>
  )
}