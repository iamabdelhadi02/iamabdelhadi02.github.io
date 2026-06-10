import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdelhadi Djafer — Fullstack Developer & Agentic AI Builder',
  description:
    'End-to-end product engineering: intelligent automation, conversational AI, cross-platform mobile apps, and cloud infrastructure. Based in Algeria, working remotely.',
  keywords: [
    'Agentic AI Builder',
    'Fullstack Developer',
    'Intelligent Automation',
    'Conversational AI',
    'Cross-Platform Mobile',
    'Cloud Infrastructure',
    'AI-Native Products',
    'End-to-End Delivery',
  ],
  authors: [{ name: 'Abdelhadi Djafer' }],
  openGraph: {
    title: 'Abdelhadi Djafer — Fullstack Developer & Agentic AI Builder',
    description: 'End-to-end engineering: agentic AI, mobile apps, serverless backends.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@iamabdelhadi02',
    title: 'Abdelhadi Djafer — Fullstack Developer & Agentic AI Builder',
    description: 'End-to-end engineering: agentic AI, mobile apps, serverless backends.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
