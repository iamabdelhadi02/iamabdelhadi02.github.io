'use client'

import { useState, useCallback, ReactNode } from 'react'

interface MailtoLinkProps {
  email: string
  className?: string
  children: ReactNode
}

export function MailtoLink({ email, className, children }: MailtoLinkProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      // Try opening mail client
      window.location.href = `mailto:${email}`
      // Also copy to clipboard as fallback
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }).catch(() => {})
    },
    [email]
  )

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
      title={copied ? 'Email copied!' : `Email ${email}`}
    >
      {copied ? 'Copied to clipboard ✓' : children}
    </a>
  )
}
