'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink, Github, Smartphone, Server, Globe,
  ChevronLeft, ChevronRight, Lock
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'

// ── Shared slide variants (direction-aware horizontal slider) ───────────
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
}

// ── Language Master phone carousel ──────────────────────────────────────
const lmScreenshots = [
  { src: '/screenshots/lm-onboarding.png', label: 'Onboarding' },
  { src: '/screenshots/lm-auth.png', label: 'Auth' },
  { src: '/screenshots/lm-languages.png', label: 'Language Selection' },
  { src: '/screenshots/lm-lessons.png', label: 'Lesson Screen' },
  { src: '/screenshots/lm-ai-teacher.png', label: 'AI Teacher' },
]

function PhoneCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const directionRef = useRef(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (i: number) => {
    directionRef.current = i > current ? 1 : -1
    setCurrent(i)
  }
  const prev = () => {
    directionRef.current = -1
    setCurrent((c) => (c - 1 + lmScreenshots.length) % lmScreenshots.length)
  }
  const next = () => {
    directionRef.current = 1
    setCurrent((c) => (c + 1) % lmScreenshots.length)
  }

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        directionRef.current = 1
        setCurrent((c) => (c + 1) % lmScreenshots.length)
      }, 3500)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, lmScreenshots.length])

  return (
    <div
      className="flex flex-col items-center gap-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Screenshot display — no phone frame, no notch, full visibility */}
      <div className="relative" style={{ width: 200, height: 420 }}>
        <AnimatePresence mode="popLayout" custom={directionRef.current}>
          <motion.div
            key={current}
            custom={directionRef.current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.32, 0.08, 0.24, 1] }}
            className="w-full h-full relative overflow-hidden rounded-xl"
          >
            <Image
              src={lmScreenshots[current].src}
              alt={lmScreenshots[current].label}
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          className="w-7 h-7 rounded-full border border-border-c flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
        >
          <ChevronLeft size={14} />
        </button>
        <span className="font-mono text-xs text-muted">
          {lmScreenshots[current].label}
        </span>
        <button
          onClick={next}
          className="w-7 h-7 rounded-full border border-border-c flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-1.5">
        {lmScreenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'w-5 bg-accent' : 'w-1.5 bg-border-c'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Wegether screenshots (all from Wegether Tourist app) ────────────────
const wgScreenshots = [
  { src: '/screenshots/wg-home.png', label: 'Wegether' },
  { src: '/screenshots/wg-tourist.png', label: 'Tourist App' },
  { src: '/screenshots/wg-guide.png', label: 'Chat' },
  { src: '/screenshots/wg-chat.png', label: 'Itinerary Builder' },
]

function WegetherCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const directionRef = useRef(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (i: number) => {
    directionRef.current = i > current ? 1 : -1
    setCurrent(i)
  }
  const prev = () => {
    directionRef.current = -1
    setCurrent((c) => (c - 1 + wgScreenshots.length) % wgScreenshots.length)
  }
  const next = () => {
    directionRef.current = 1
    setCurrent((c) => (c + 1) % wgScreenshots.length)
  }

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        directionRef.current = 1
        setCurrent((c) => (c + 1) % wgScreenshots.length)
      }, 3500)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, wgScreenshots.length])

  return (
    <div
      className="flex flex-col items-center gap-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Screenshot display */}
      <div className="relative" style={{ width: 200, height: 420 }}>
        <AnimatePresence mode="popLayout" custom={directionRef.current}>
          <motion.div
            key={current}
            custom={directionRef.current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.32, 0.08, 0.24, 1] }}
            className="w-full h-full relative overflow-hidden rounded-xl"
          >
            <Image
              src={wgScreenshots[current].src}
              alt={wgScreenshots[current].label}
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          className="w-7 h-7 rounded-full border border-border-c flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
        >
          <ChevronLeft size={14} />
        </button>
        <span className="font-mono text-xs text-muted">
          {wgScreenshots[current].label}
        </span>
        <button
          onClick={next}
          className="w-7 h-7 rounded-full border border-border-c flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-1.5">
        {wgScreenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'w-5 bg-accent' : 'w-1.5 bg-border-c'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Wegether apps data ───────────────────────────────────────────────────
const wegetherApps = [
  { name: 'Wegether Tourist', platform: 'iOS', link: 'https://apps.apple.com/us/app/wegether/id1638375019' },
  { name: 'Wegether Tourist', platform: 'Android', link: 'https://play.google.com/store/apps/details?id=com.wegether_tourist' },
  { name: 'Wegether Guide', platform: 'iOS', link: 'https://apps.apple.com/us/app/wegether-guide/id1638450314' },
  { name: 'Wegether Guide', platform: 'Android', link: 'https://play.google.com/store/apps/details?id=com.wegether_supplier' },
]

const wegetherStack = [
  'React Native', 'AWS Lambda', 'DynamoDB', 'API Gateway',
  'EC2', 'S3', 'SNS', 'Amplify', 'iOS', 'Android', 'LLM Integration',
]

const lmStack = [
  'React Native', 'Expo', 'TypeScript', 'Claude AI', 'LLM', 'Conversational AI',
]

// ── Section component ────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/20 to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent">02.</span>
            <div className="h-px flex-1 bg-border-c" style={{ maxWidth: 60 }} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Selected Work
          </h2>
          <p className="text-muted-2 mt-3 max-w-lg">
            Projects I've built and shipped — from a live two-app travel platform to
            AI-native prototypes.
          </p>
        </FadeIn>

        {/* ── WEGETHER — featured large card ── */}
        <FadeIn className="mb-8">
          <div className="glass glass-hover rounded-2xl overflow-hidden border border-border-c/60 hover:border-accent/20 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">
            <div className="p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-5xl font-bold text-border-c select-none">01</span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="tag tag-green">Live on App Stores</span>
                        <span className="tag">Tourist + Guide</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-3xl font-bold text-text mb-3">
                    Wegether
                  </h3>
                  <p className="text-muted-2 text-sm mb-2 font-mono">
                    Travel Platform · US-based startup
                  </p>
                  <p className="text-muted-2 leading-relaxed mb-4">
                    A two-app travel platform connecting tourists with local guides across
                    multiple time zones. I joined in the early stages, designed the serverless
                    architecture, and built across the full stack for ~5 years — from DynamoDB
                    schema design to App Store deployment.
                  </p>
                  <p className="text-muted-2 leading-relaxed mb-4 text-sm">
                    <span className="text-text font-medium">Business outcome:</span> The
                    serverless architecture avoids idle infrastructure cost — you pay for
                    usage, not uptime. Real-time chat on EC2 with presence indicators means
                    tourists and guides communicate without polling delays. The LLM itinerary
                    builder was the platform's first AI feature, integrated directly into the
                    tourist app's booking flow.
                  </p>

                  {/* Architecture highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Smartphone, label: 'Mobile', desc: 'iOS + Android' },
                      { icon: Server, label: 'Backend', desc: 'AWS Lambda + DynamoDB' },
                      { icon: Globe, label: 'Chat', desc: 'Real-time EC2 chat server' },
                      { icon: Server, label: 'AI Feature', desc: 'LLM itinerary builder' },
                    ].map(({ icon: Icon, label, desc }) => (
                      <div
                        key={label}
                        className="flex items-start gap-2 p-3 rounded-lg bg-surface/50 border border-border-c/40"
                      >
                        <div className="w-6 h-6 rounded flex items-center justify-center bg-accent/10 flex-shrink-0 mt-0.5">
                          <Icon size={12} className="text-accent" />
                        </div>
                        <div>
                          <div className="text-text text-xs font-mono font-medium">{label}</div>
                          <div className="text-muted text-xs mt-0.5">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {wegetherStack.map((t) => (
                      <span key={t} className="tag tag-muted text-xs">{t}</span>
                    ))}
                  </div>

                  {/* Source note */}
                  <div className="flex items-center gap-2 text-muted font-mono text-xs mb-6">
                    <Lock size={11} />
                    <span>Source code — private repositories</span>
                  </div>

                  {/* App store links */}
                  <div className="space-y-2">
                    <p className="font-mono text-xs text-muted-2 mb-2">Download on</p>
                    <div className="grid grid-cols-2 gap-2">
                      {wegetherApps.map((app) => (
                        <a
                          key={`${app.name}-${app.platform}`}
                          href={app.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-border-c/60 hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                        >
                          <Smartphone size={12} className="text-muted group-hover:text-accent transition-colors" />
                          <div className="min-w-0">
                            <div className="text-text text-xs font-mono truncate">{app.name}</div>
                            <div className="text-muted text-xs">{app.platform}</div>
                          </div>
                          <ExternalLink size={10} className="text-muted group-hover:text-accent ml-auto flex-shrink-0 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — Wegether screenshots carousel */}
                <div className="flex flex-col items-center justify-center">
                  <WegetherCarousel />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Bottom row: Language Master + Portfolio ── */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {/* Language Master */}
          <StaggerItem>
            <div className="glass glass-hover rounded-2xl overflow-hidden border border-border-c/60 hover:border-accent-violet/30 transition-all duration-300 h-full">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="font-mono text-4xl font-bold text-border-c select-none">02</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="tag tag-violet">Concept</span>
                    <span className="tag">AI-Powered</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-text mb-2">
                  Language Master
                </h3>
                <p className="text-muted-2 text-sm font-mono mb-4">AI Language Learning App</p>
                <p className="text-muted-2 text-sm leading-relaxed mb-4">
                  An AI-native language learning prototype that replaces static lesson trees
                  with real-time conversational AI. Speech input, pronunciation scoring, and
                  a personalized lesson path — the AI adapts to the learner rather than
                  routing them through a fixed curriculum.
                </p>
                <p className="text-muted-2 text-sm leading-relaxed mb-4">
                  <span className="text-text font-medium">Why it matters:</span> Built to
                  explore how agentic AI patterns (tool calling, memory, multi-step reasoning)
                  behave in a mobile context. The codebase demonstrates the integration points
                  between an LLM backend and a React Native client — the same patterns that
                  power production AI features.
                </p>
                <p className="text-xs text-muted font-mono mb-4 italic">
                  Screenshots from the initial design prototype
                </p>

                {/* Screenshot carousel */}
                <div className="flex justify-center mb-6">
                  <PhoneCarousel />
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {lmStack.map((t) => (
                    <span key={t} className="tag tag-violet text-xs">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/iamabdelhadi02/language-master"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 border border-border-c rounded-lg text-sm font-mono text-muted-2 hover:border-accent-violet/40 hover:text-accent-violet transition-all"
                  >
                    <Github size={14} />
                    View Source
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <span className="text-muted font-mono text-xs">Educational · Not deployed</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* This Portfolio */}
          <StaggerItem>
            <div className="glass glass-hover rounded-2xl overflow-hidden border border-border-c/60 hover:border-accent/20 transition-all duration-300 h-full">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-4xl font-bold text-border-c select-none">03</span>
                  <span className="tag">This Site</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-text mb-2">
                  This Portfolio
                </h3>
                <p className="text-muted-2 text-sm font-mono mb-4">Personal Portfolio Website</p>
                <p className="text-muted-2 text-sm leading-relaxed mb-4">
                  A static Next.js site designed for fast, zero-cost deployment. Built with
                  TypeScript, Tailwind CSS with custom design tokens, and Framer Motion for
                  scroll-triggered animations — all compiled to static HTML that runs on any
                  host without a server.
                </p>
                <p className="text-muted-2 text-sm leading-relaxed mb-4">
                  <span className="text-text font-medium">What this demonstrates:</span> the
                  same attention to performance, accessibility, and deployment discipline I
                  bring to client projects. Static export means no runtime costs, no
                  cold starts, and a single build that deploys identically to Vercel,
                  GitHub Pages, or Netlify.
                </p>

                {/* Tech highlights */}
                <div className="space-y-2 mb-6">
                  {[
                    { label: 'Framework', value: 'Next.js 14 + TypeScript' },
                    { label: 'Styling', value: 'Tailwind CSS + Custom tokens' },
                    { label: 'Animation', value: 'Framer Motion (scroll-triggered)' },
                    { label: 'Deploy', value: 'GitHub Pages / Vercel / Netlify' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-muted w-20">{label}</span>
                      <span className="text-border-c">→</span>
                      <span className="text-muted-2">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'].map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-muted font-mono text-xs">
                  <Github size={12} />
                  <span>Repository link to be added after deployment</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
