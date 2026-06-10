'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'

const stats = [
  { value: '~5', label: 'Years in production', sub: 'Fullstack & mobile' },
  { value: '4', label: 'Apps shipped', sub: 'iOS + Android · Live' },
  { value: '6', label: 'Anthropic certs', sub: 'All technical tracks' },
  { value: '3', label: 'Languages', sub: 'Arabic · English · French' },
]

const focuses = [
  {
    title: 'Agentic Systems',
    desc: 'Multi-agent workflows, tool calling, MCP integrations, and autonomous AI products. Building beyond chatbots — systems that reason, plan, and act.',
  },
  {
    title: 'Fullstack Delivery',
    desc: 'From DynamoDB schema design to App Store deployment. I build entire products, spanning infrastructure, backend, and mobile clients.',
  },
  {
    title: 'AI-Native Products',
    desc: 'Integrating LLMs into real user workflows where AI is the core experience rather than a sidebar feature. Shipping, measuring, iterating.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/10 to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="accent-divider mb-4">
            <span className="font-mono text-xs text-accent tracking-wider">05.</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            About
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Bio */}
          <FadeIn>
            <div className="space-y-5 text-muted-2 leading-relaxed">
              <p>
                I'm <span className="text-text font-medium">Abdelhadi Djafer</span> — an
                Fullstack Developer & Agentic AI Builder based in Chlef, Algeria.
              </p>
              <p>
                For ~5 years I was the technical core of{' '}
                <span className="text-text">Wegether Travel LLC</span>, a US-based startup,
                where I built and maintained a two-app travel platform across iOS and Android.
                I took over in the early stages, designed the serverless AWS architecture
                (Lambda, DynamoDB, API Gateway, EC2, S3, SNS), and integrated the platform's
                first LLM-powered feature — an AI itinerary builder.
              </p>
              <p>
                Today I build{' '}
                <span className="text-accent">agentic AI systems</span> — multi-agent
                workflows, tool-calling pipelines, MCP integrations, and autonomous
                systems that move beyond chatbots into software that reasons, plans,
                and acts.
              </p>
              <p>
                I hold{' '}
                <span className="text-text font-medium">6 Anthropic Academy certificates</span>
                {' '}covering the full agentic AI stack:
              </p>
              <ul className="space-y-1.5 pl-5">
                {[
                  'Claude Code in Action',
                  'Claude Code 101',
                  'Introduction to Subagents',
                  'Introduction to agent skills',
                  'Introduction to Model Context Protocol',
                  'Claude with the Anthropic API',
                ].map((cert) => (
                  <li key={cert} className="text-muted-2 text-sm list-disc">
                    {cert}
                  </li>
                ))}
              </ul>
              <p>
                Trilingual (Arabic, English, French). I work remotely, communicate
                across time zones, and take projects from architecture to deployment.
              </p>
            </div>
          </FadeIn>

          {/* Current focus */}
          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-4">
              <p className="font-mono text-xs text-accent mb-6">What I'm focused on</p>
              {focuses.map((item) => (
                <div
                  key={item.title}
                  className="glass card-glow rounded-xl p-5 border border-border-c/50 hover:border-accent/25 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:shadow-[0_0_6px_rgba(56,189,248,0.8)] transition-all" />
                    <span className="font-display font-semibold text-text text-sm">{item.title}</span>
                  </div>
                  <p className="text-muted-2 text-sm leading-relaxed pl-3.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Stats bar */}
        <FadeIn>
          <div className="accent-line mb-0" />
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <StaggerItem key={stat.label}>
                <div
                  className={`py-8 px-6 text-center ${
                    i < stats.length - 1
                      ? 'border-r border-border-c/40'
                      : ''
                  }`}
                >
                  <div className="font-display text-4xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-text text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-muted font-mono text-xs">{stat.sub}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="accent-line" />
        </FadeIn>
      </div>
    </section>
  )
}
