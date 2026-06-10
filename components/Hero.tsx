'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Twitter, Linkedin, MapPin } from 'lucide-react'

const agentLines = [
  { text: '> initializing agentic runtime...', type: 'cmd', delay: 200 },
  { text: '✓ tools registered: [web_search, code_exec, memory, mcp]', type: 'success', delay: 800 },
  { text: '> deploying serverless backend on AWS...', type: 'cmd', delay: 1500 },
  { text: '✓ Lambda + DynamoDB + API Gateway: serving traffic', type: 'success', delay: 2100 },
  { text: '> shipping React Native apps to stores...', type: 'cmd', delay: 2900 },
  { text: '✓ iOS App Store + Google Play: 2 apps, both platforms', type: 'success', delay: 3500 },
  { text: '> orchestrating intelligent workflows...', type: 'cmd', delay: 4300 },
  { text: '✓ conversational agents: operational', type: 'success', delay: 4900 },
  { text: '', type: 'gap', delay: 5200 },
  { text: '> agent.ready()', type: 'cmd', delay: 5400 },
  { text: '← "Tell me what you need built."', type: 'info', delay: 6000 },
]

function AgentTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timers = agentLines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines(i + 1)
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      }, line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl overflow-hidden glow-cyan"
      style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border-c/40 bg-surface/60">
        <div className="w-3 h-3 rounded-full bg-red-500/70 shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70 shadow-[0_0_6px_rgba(234,179,8,0.5)]" />
        <div className="w-3 h-3 rounded-full bg-green-500/70 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
        <span className="ml-2 text-muted font-mono text-[10px] tracking-wider">agent.runtime.ts</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-accent-green shadow-[0_0_6px_rgba(74,222,128,0.7)] animate-pulse" />
      </div>
      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="p-5 h-52 overflow-hidden font-mono text-xs leading-relaxed"
        style={{ scrollBehavior: 'smooth' }}
      >
        {agentLines.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`terminal-line ${
              line.type === 'cmd'
                ? 'terminal-cmd'
                : line.type === 'success'
                ? 'terminal-success'
                : line.type === 'info'
                ? 'terminal-info'
                : 'terminal-muted'
            } ${line.text === '' ? 'h-3' : ''}`}
          >
            {line.text}
            {i === visibleLines - 1 && line.text !== '' && (
              <span className="inline-block w-2 h-3 bg-accent ml-1 animate-blink" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Animated glow orbs */}
      <div
        className="orb orb-slow w-96 h-96 top-1/4 -left-32"
        style={{ background: 'rgba(56, 189, 248, 0.12)' }}
      />
      <div
        className="orb orb-medium w-80 h-80 top-1/3 right-0"
        style={{ background: 'rgba(129, 140, 248, 0.1)' }}
      />
      <div
        className="orb orb-fast w-64 h-64 bottom-20 left-1/3"
        style={{ background: 'rgba(74, 222, 128, 0.06)' }}
      />
      <div
        className="orb orb-slow w-72 h-72 top-2/3 right-1/4"
        style={{ background: 'rgba(56, 189, 248, 0.05)' }}
      />

      {/* Fade overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Location badge */}
            <motion.div
              {...fadeUp}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="tag">
                <MapPin size={10} className="mr-1" />
                Chlef, Algeria 🇩🇿
              </span>
              <span className="tag tag-green">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green mr-1.5 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-text mb-6"
            >
              I turn ideas
              <br />
              <span className="gradient-text">into shipped</span>
              <br />
              <span className="text-text">products.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-2 text-lg leading-relaxed max-w-md mb-8"
            >
              I solve product problems end-to-end — intelligent automation, conversational AI,
              cross-platform mobile apps, and cloud infrastructure that scales
              without idle cost.
            </motion.p>

            {/* Role tags */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {[
                { label: 'Intelligent Automation', color: '' },
                { label: 'Conversational AI', color: '' },
                { label: 'Cross-Platform Mobile', color: 'tag-violet' },
                { label: 'Cloud Infrastructure', color: 'tag-violet' },
                { label: 'AI-Native Products', color: 'tag-green' },
                { label: 'End-to-End Delivery', color: 'tag-green' },
              ].map((t) => (
                <span key={t.label} className={`tag ${t.color}`}>
                  {t.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="mailto:abdelhadi.djafer.02@gmail.com"
                className="group btn-shimmer flex items-center gap-2 px-6 py-3 bg-accent text-bg font-mono text-sm font-medium rounded-xl hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-[1.02]"
              >
                Send a message
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/iamabdelhadi02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-border-c text-muted-2 font-mono text-sm rounded-lg hover:border-accent/40 hover:text-accent transition-all duration-200"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-muted font-mono text-xs">Find me on</span>
              <div className="w-8 h-px bg-border-c" />
              <div className="flex items-center gap-3">
                {[
                  { icon: Twitter, href: 'https://x.com/iamabdelhadi02', label: 'X / Twitter' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/iamabdelhadidjafer', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/iamabdelhadi02', label: 'GitHub' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-lg border border-border-c flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — agent terminal */}
          <div className="lg:pl-8">
            <AgentTerminal />

            {/* Stats below terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-3 mt-4"
            >
              {[
                { value: '~5', label: 'years production' },
                { value: '4', label: 'apps shipped' },
                { value: '6', label: 'Anthropic certs' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass card-glow rounded-xl p-4 text-center border border-border-c/40 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="font-display text-2xl font-bold gradient-text mb-0.5">{stat.value}</div>
                  <div className="text-muted font-mono text-[10px] tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col items-center gap-3 mt-20"
        >
          <span className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase">scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
