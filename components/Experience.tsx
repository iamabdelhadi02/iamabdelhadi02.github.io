'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'

const experiences = [
  {
    company: 'Wegether Travel LLC',
    role: 'Fullstack Mobile & AI Developer',
    period: '2020 — 2026',
    note: '~5 years · US-based startup · Remote',
    type: 'work',
    current: false,
    color: 'accent',
    bullets: [
      'Designed and scaled a serverless AWS backend (Lambda, DynamoDB, EC2, API Gateway, S3, SNS, Amplify) serving tourists and guides across multiple time zones.',
      'Built and maintained two React Native apps — Wegether Tourist and Wegether Guide — each deployed to both iOS and Android (4 app store listings).',
      'Modeled DynamoDB schemas for travel-platform read/write patterns: bookings, user profiles, reviews, and multi-currency payments.',
      'Architected a real-time chat system on EC2 with presence indicators and push notifications via SNS — no polling, no delay.',
      'Integrated an LLM-powered AI itinerary builder — the platform\'s first AI feature — directly into the booking flow.',
      'Implemented multi-language support, multi-currency pricing, and split-payout payment processing.',
      'Set up CI/CD for automated testing and deployment to both App Store and Google Play.',
    ],
  },
  {
    company: 'INTTIC Oran',
    role: 'Graduation Project — Desktop App',
    period: 'Feb 2019 — May 2019',
    note: 'Oran, Algeria',
    type: 'project',
    current: false,
    color: 'accent-violet',
    bullets: [
      'Built a desktop email management application using JavaFX for the UI and JDBC + SQLite for data persistence.',
      'Project theme: Computer-Mediated Communication, Models and its uses.',
    ],
  },
  {
    company: 'Algerie Telecom',
    role: 'Network Internship',
    period: 'Mar 2019 — Apr 2019',
    note: '42 days · Chlef, Algeria',
    type: 'internship',
    current: false,
    color: 'muted',
    bullets: [
      'Hands-on with regional physical network infrastructure.',
    ],
  },
  {
    company: 'Ooredoo Development Department',
    role: 'Trainee — Android Dev & IoT',
    period: 'Mar 2017 — May 2017',
    note: 'Oran, Algeria',
    type: 'internship',
    current: false,
    color: 'muted',
    bullets: [
      'Android mobile development fundamentals.',
      'Arduino & IoT basics.',
    ],
  },
  {
    company: 'ATM Mobilis',
    role: 'Network Internship',
    period: 'Jul 2017',
    note: '21 days · Chlef, Algeria',
    type: 'internship',
    current: false,
    color: 'muted',
    bullets: [
      'Hands-on with live cellular network infrastructure.',
    ],
  },
]

const education = {
  degree: 'Computer Science & Networking',
  institution: 'National Institute of Telecommunications and ICT of Oran (INTTIC)',
  period: 'Sept 2013 — June 2019',
}

const colorMap: Record<string, string> = {
  accent: 'bg-accent',
  'accent-violet': 'bg-accent-violet',
  'accent-green': 'bg-accent-green',
  muted: 'bg-muted',
}
const textColorMap: Record<string, string> = {
  accent: 'text-accent',
  'accent-violet': 'text-accent-violet',
  'accent-green': 'text-accent-green',
  muted: 'text-muted-2',
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/10 to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent">04.</span>
            <div className="h-px bg-border-c" style={{ width: 60 }} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Experience
          </h2>
          <p className="text-muted-2 mt-3 max-w-lg">
            ~5 years building and maintaining a live production platform, plus earlier
            engineering training.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <StaggerContainer className="relative space-y-10">
              {experiences.map((exp, i) => (
                <StaggerItem key={exp.company + exp.period}>
                  <div className="relative pl-8">
                    {/* Line */}
                    {i < experiences.length - 1 && (
                      <div
                        className="absolute left-[3px] top-5 bottom-[-2.5rem] w-px"
                        style={{
                          background: 'linear-gradient(180deg, rgba(26,39,64,0.8), rgba(26,39,64,0.2))',
                        }}
                      />
                    )}
                    {/* Dot */}
                    <div
                      className={`absolute left-0 top-1.5 w-2 h-2 rounded-full ${colorMap[exp.color]}`}
                      style={
                        exp.color === 'accent'
                          ? { boxShadow: '0 0 8px rgba(56,189,248,0.6)' }
                          : {}
                      }
                    />

                    {/* Card */}
                    <div
                      className={`glass rounded-xl p-6 border transition-all duration-300 ${
                        exp.color === 'accent'
                          ? 'border-accent/15 hover:border-accent/30'
                          : exp.color === 'accent-violet'
                          ? 'border-accent-violet/15 hover:border-accent-violet/30'
                          : 'border-border-c/40 hover:border-border-c/70'
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-display font-semibold text-text text-lg">
                            {exp.company}
                          </h3>
                          <p className={`font-mono text-sm ${textColorMap[exp.color]}`}>
                            {exp.role}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-mono text-xs text-muted-2 whitespace-nowrap">
                            {exp.period}
                          </div>
                          <div className="font-mono text-xs text-muted mt-0.5">
                            {exp.note}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-1.5">
                        {exp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-muted-2 text-sm leading-relaxed"
                          >
                            <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${colorMap[exp.color]} opacity-70`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Sidebar — education */}
          <div>
            <FadeIn direction="right" delay={0.2}>
              <div className="sticky top-24">
                <p className="font-mono text-xs text-accent mb-4">Education</p>
                <div className="glass rounded-xl p-6 border border-border-c/40">
                  <div className="font-display text-base font-semibold text-text mb-1">
                    {education.degree}
                  </div>
                  <div className="text-muted-2 text-sm mb-3 leading-relaxed">
                    {education.institution}
                  </div>
                  <div className="font-mono text-xs text-muted">{education.period}</div>
                </div>

                {/* Languages */}
                <p className="font-mono text-xs text-accent mt-8 mb-4">Languages</p>
                <div className="space-y-2">
                  {[
                    { lang: 'Arabic', level: 'Native' },
                    { lang: 'English', level: 'Fluent' },
                    { lang: 'French', level: 'Mid-level' },
                  ].map(({ lang, level }) => (
                    <div
                      key={lang}
                      className="flex items-center justify-between glass rounded-lg px-4 py-2.5 border border-border-c/40"
                    >
                      <span className="font-body text-sm text-text">{lang}</span>
                      <span className="font-mono text-xs text-muted">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
