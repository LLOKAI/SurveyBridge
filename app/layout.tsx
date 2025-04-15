import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'survey-bridge',
  description: 'SurveyBridge is a platform that connects survey creators with vendors to provide localized rewards for survey participants.',
  keywords: 'survey, rewards, localization, analytics, global reach',
  authors: [{ name: 'SurveyBridge Team', url: 'https://surveybridge.com' }],
  creator: 'SurveyBridge',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
