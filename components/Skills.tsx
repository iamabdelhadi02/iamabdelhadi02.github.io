'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'

const skillGroups = [
  {
    label: 'Agentic AI',
    color: 'accent',
    borderColor: 'border-accent/20',
    bgColor: 'bg-accent/5',
    tagClass: '',
    skills: [
      'LLM Integration',
      'Tool Calling',
      'MCP Protocol',
      'Multi-agent Systems',
      'Subagents',
      'Prompt Engineering',
      'Claude AI',
      'Anthropic SDK',
      'AI Orchestration',
      'Agentic Workflows',
      'Claude Code',
    ],
  },
  {
    label: 'Fullstack',
    color: 'accent-violet',
    borderColor: 'border-accent-violet/20',
    bgColor: 'bg-accent-violet/5',
    tagClass: 'tag-violet',
    skills: [
      'React Native',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'REST APIs',
      'iOS Development',
      'Android Development',
      'Mobile UI/UX',
      'App Store Deploy',
      'Google Play Deploy',
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    color: 'accent-green',
    borderColor: 'border-accent-green/20',
    bgColor: 'bg-accent-green/5',
    tagClass: 'tag-green',
    skills: [
      'AWS Lambda',
      'DynamoDB',
      'API Gateway',
      'EC2',
      'S3',
      'SNS',
      'Amplify',
      'Serverless',
      'CI/CD',
      'Real-time Systems',
    ],
  },
  {
    label: 'AI & ML',
    color: 'accent',
    borderColor: 'border-accent/20',
    bgColor: 'bg-accent/5',
    tagClass: '',
    skills: [
      'PyTorch',
      'Deep Learning',
      'Model Integration',
      'AI Feature Engineering',
      'LLM APIs',
      'AI Safety Concepts',
    ],
  },
  {
    label: 'Tools & Languages',
    color: 'muted-2',
    borderColor: 'border-border-c/60',
    bgColor: 'bg-surface/40',
    tagClass: 'tag-muted',
    skills: [
      'Python',
      'Linux',
      'Git',
      'JavaFX',
      'SQLite',
      'Arabic',
      'English',
      'French',
    ],
  },
]

const certifications = [
  'Claude Code in Action',
  'Unleashing the Power of AI Agents',
  'Subagents — Anthropic Academy',
  'Agent Skills & Tool Use',
  'Supercharge Data Analytics with GenAI',
  'PyTorch for Deep Learning — Zero to Mastery',
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/10 to-bg pointer-events-none" />
      <div
        className="orb orb-medium w-[400px] h-[400px] top-1/3 -right-32 opacity-20"
        style={{ background: 'rgba(129, 140, 248, 0.06)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="accent-divider mb-4">
            <span className="font-mono text-xs text-accent tracking-wider">03.</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Skills & Stack
          </h2>
          <p className="text-muted-2 mt-3 max-w-lg">
            Every technology listed here was used in a shipped product — from the
            Wegether platform to agentic AI systems.
          </p>
        </FadeIn>

        {/* Skill groups */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group) => (
            <StaggerItem key={group.label}>
              <div
                className={`glass glass-hover card-glow rounded-xl p-6 border ${group.borderColor} h-full hover:shadow-lg transition-all duration-500`}
              >
                {/* Group header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${
                    group.color === 'accent' ? 'bg-accent' :
                    group.color === 'accent-violet' ? 'bg-accent-violet' :
                    group.color === 'accent-green' ? 'bg-accent-green' :
                    'bg-muted-2'
                  }`} />
                  <span className={`font-mono text-sm font-medium ${
                    group.color === 'accent' ? 'text-accent' :
                    group.color === 'accent-violet' ? 'text-accent-violet' :
                    group.color === 'accent-green' ? 'text-accent-green' :
                    'text-muted-2'
                  }`}>
                    {group.label}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className={`tag ${group.tagClass} text-xs`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications */}
        <FadeIn>
          <div className="accent-line mb-8" />
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-accent">Certifications & Courses</span>
            <span className="text-muted font-mono text-xs">— Anthropic Academy & beyond</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="cert-badge">
                <span className="text-accent">◆</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
