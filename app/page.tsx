import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}
