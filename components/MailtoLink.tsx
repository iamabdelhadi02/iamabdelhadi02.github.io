'use client'

import { useState, ReactNode } from 'react'

interface MailtoLinkProps {
  email: string
  className?: string
  children: ReactNode
}

export function MailtoLink({ email, className, children }: MailtoLinkProps) {
  const [copied, setCopied] = useState(false)

  return (
    <a
      href={`mailto:${email}`}
      onClick={() => {
        // Silently copy to clipboard — do NOT preventDefault,
        // the native <a href> handles the mailto: protocol launch
        navigator.clipboard.writeText(email).then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }).catch(() => {})
      }}
      className={className}
      title={copied ? 'Email copied to clipboard!' : `Open email to: ${email}`}
    >
      {copied ? '✓ Copied!' : children}
    </a>
  )
}
