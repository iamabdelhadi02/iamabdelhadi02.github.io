'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { MailtoLink } from './MailtoLink'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function ScrollProgress() {
  const scaleX = useMotionValue(0)
  const smoothProgress = useSpring(scaleX, { stiffness: 100, damping: 30 })

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0
    scaleX.set(progress)
  }, [scaleX])

  useEffect(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [updateProgress])

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: smoothProgress }}
    />
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-bg/75 backdrop-blur-2xl border-b border-border-c/40 shadow-[0_1px_0_rgba(255,255,255,0.02)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-200">
              <span className="font-mono text-accent text-xs font-medium">AD</span>
            </div>
            <span className="font-display font-semibold text-text text-sm hidden sm:block">
              abdelhadi<span className="text-muted-2">.</span>
              <span className="text-accent">dev</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link text-sm font-body"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <MailtoLink
              email="abdelhadi.djafer.02@gmail.com"
              className="px-4 py-2 text-sm font-mono text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-all duration-200"
            >
              Get in touch
            </MailtoLink>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted-2 hover:text-text transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -16, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 mx-4 glass rounded-2xl border border-border-c/50 shadow-2xl md:hidden origin-top"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 px-2 text-muted-2 hover:text-text hover:bg-surface/50 rounded-lg font-body text-sm transition-all"
                >
                  {link.label}
                </button>
              ))}
              <MailtoLink
                email="abdelhadi.djafer.02@gmail.com"
                className="mt-3 py-3 text-center font-mono text-sm text-accent border border-accent/30 rounded-xl hover:bg-accent/10 hover:border-accent/50 transition-all block"
              >
                Get in touch
              </MailtoLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
