// import { Hero } from '@/component'
import { HeroSection, ClienSection, IntroductionSection, OurVisionSection, ServicesSection } from '@/component'

export default function Home() {
  return (
    <main 
    className="overflow-hidden">
      <HeroSection/>
      <IntroductionSection/>
      <OurVisionSection/>
      <ServicesSection/>
      <ClienSection/>
      {/* <SkeletonTest/> */}
    </main>
  )
}
