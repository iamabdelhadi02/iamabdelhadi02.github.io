import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdelhadi Djafer — Agentic AI Engineer & Fullstack Developer',
  description:
    'Building AI agents, agentic systems, and fullstack products. React Native · AWS Serverless · LLM Integration · Tool Calling · MCPs.',
  keywords: [
    'Agentic AI Engineer',
    'Fullstack Developer',
    'LLM Integration',
    'React Native',
    'AWS Serverless',
    'AI Agents',
    'Tool Calling',
    'MCP',
    'Claude AI',
  ],
  authors: [{ name: 'Abdelhadi Djafer' }],
  openGraph: {
    title: 'Abdelhadi Djafer — Agentic AI Engineer',
    description: 'Building AI agents, agentic systems, and fullstack products.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@iamabdelhadi02',
    title: 'Abdelhadi Djafer — Agentic AI Engineer',
    description: 'Building AI agents, agentic systems, and fullstack products.',
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
