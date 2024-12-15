import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ProjectGoals from '@/components/ProjectGoals'
import TechStack from '@/components/TechStack'
import Performance from '@/components/Performance'
import Statistics from '@/components/Statistics'
import Testimonials from '@/components/Testimonials'
import Acknowledgments from '@/components/Acknowledgments'
import Roadmap from '@/components/Roadmap'
import Integration from '@/components/Integration'
import Documentation from '@/components/Documentation'
import Footer from '@/components/Footer'
import Showcase from '@/components/Showcase'
import Collaboration from '@/components/Collaboration'
import Recognition from '@/components/Recognition'
import { AnimateOnView } from '@/components/animations/AnimationWrapper'

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="relative">
        <div className="space-y-8">
          <AnimateOnView animation="fade-in" duration="normal">
            <Hero />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-up" duration="normal" delay="200">
            <Recognition />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-up" duration="normal">
            <Showcase />
          </AnimateOnView>
          <AnimateOnView animation="fade-in" duration="normal">
            <Collaboration />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-up" duration="normal">
            <Features />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-left" duration="normal">
            <Integration />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-right" duration="normal">
            <Documentation />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-up" duration="normal">
            <ProjectGoals />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-left" duration="normal">
            <TechStack />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-right" duration="normal">
            <Performance />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-up" duration="normal">
            <Statistics />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-up" duration="normal">
            <Roadmap />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-left" duration="normal">
            <Testimonials />
          </AnimateOnView>
          <AnimateOnView animation="fade-in-right" duration="normal">
            <Acknowledgments />
          </AnimateOnView>
        </div>
      </main>
      <AnimateOnView animation="fade-in" duration="fast">
        <Footer />
      </AnimateOnView>
    </div>
  )
}

