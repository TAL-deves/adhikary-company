// import { Hero } from '@/component'
import { HeroSection, ClienSection, IntroductionSection, OurVisionSection, ServicesSection, SkeletonTest } from '@/component'

export default function Home() {
  return (
    <main 
    className="overflow-hidden, bg-slate-900"
    
    >
      <HeroSection/>
      <IntroductionSection/>
      <OurVisionSection/>
      <ServicesSection/>
      <ClienSection/>
      {/* <SkeletonTest/> */}
    </main>
  )
}
