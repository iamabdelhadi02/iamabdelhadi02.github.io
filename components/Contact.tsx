'use client'

import { Mail, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react'
import { FadeIn } from './FadeIn'
import { MailtoLink } from './MailtoLink'

const socials = [
  {
    label: 'Email',
    handle: 'abdelhadi.djafer.02@gmail.com',
    href: 'mailto:abdelhadi.djafer.02@gmail.com',
    icon: Mail,
    color: 'accent',
  },
  {
    label: 'GitHub',
    handle: '@iamabdelhadi02',
    href: 'https://github.com/iamabdelhadi02',
    icon: Github,
    color: 'muted',
  },
  {
    label: 'X / Twitter',
    handle: '@iamabdelhadi02',
    href: 'https://x.com/iamabdelhadi02',
    icon: Twitter,
    color: 'muted',
  },
  {
    label: 'LinkedIn',
    handle: 'in/iamabdelhadidjafer',
    href: 'https://www.linkedin.com/in/iamabdelhadidjafer',
    icon: Linkedin,
    color: 'muted',
  },
]

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div
          className="orb orb-medium w-96 h-96 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'rgba(56, 189, 248, 0.1)' }}
        />
        <div
          className="orb orb-slow w-64 h-64 bottom-0 right-0 translate-x-1/4 translate-y-1/4"
          style={{ background: 'rgba(129, 140, 248, 0.07)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-border-c" />
              <span className="font-mono text-xs text-accent">06. Contact</span>
              <div className="h-px w-12 bg-border-c" />
            </div>

            <h2 className="font-display text-5xl sm:text-6xl font-bold text-text mb-4">
              Let's build something.
            </h2>
            <p className="text-muted-2 text-lg max-w-md mx-auto leading-relaxed mb-10">
              If you need a system built — whether an agentic AI feature, a mobile
              app, or a serverless backend — reach out. I take projects from
              architecture to deployment.
            </p>

            {/* Primary CTA */}
            <MailtoLink
              email="abdelhadi.djafer.02@gmail.com"
              className="group btn-shimmer inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg font-mono font-medium rounded-xl hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-[1.02] mb-16 text-sm"
            >
              <Mail size={16} />
              abdelhadi.djafer.02@gmail.com
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </MailtoLink>
          </FadeIn>

          {/* Social grid */}
          <FadeIn delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {socials.map(({ label, handle, href, icon: Icon, color }) => {
                const isMailto = href.startsWith('mailto:')
                const sharedClass =
                  'group glass glass-hover card-glow rounded-xl p-5 flex flex-col gap-3 border border-border-c/50 hover:border-accent/30 transition-all duration-500'
                const inner = (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center group-hover:bg-accent/10 transition-colors border border-border-c/40">
                        <Icon size={15} className="text-muted-2 group-hover:text-accent transition-colors" />
                      </div>
                      <ArrowUpRight
                        size={13}
                        className="text-muted opacity-0 group-hover:opacity-100 transition-all group-hover:text-accent"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-muted mb-0.5">{label}</div>
                      <div className="font-body text-sm text-text truncate group-hover:text-accent transition-colors">
                        {handle}
                      </div>
                    </div>
                  </>
                )
                if (isMailto) {
                  return (
                    <MailtoLink
                      key={label}
                      email={handle}
                      className={sharedClass}
                    >
                      {inner}
                    </MailtoLink>
                  )
                }
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={sharedClass}
                  >
                    {inner}
                  </a>
                )
              })}
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <div className="relative max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-border-c/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center group hover:bg-accent/20 transition-colors">
                <span className="font-mono text-accent text-xs font-medium">AD</span>
              </div>
              <span className="font-display font-semibold text-muted-2 text-sm">
                Abdelhadi Djafer
              </span>
            </div>
            <div className="flex items-center gap-6">
              <p className="font-mono text-xs text-muted">
                Next.js · GitHub Pages
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green shadow-[0_0_6px_rgba(74,222,128,0.6)] animate-pulse" />
                <span className="font-mono text-[10px] text-muted tracking-wide">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
