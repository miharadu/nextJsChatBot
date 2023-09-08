'use client'
import type { Metadata } from 'next'
import { GlobalStyles } from './shared/style/globalStyles'
import { Global } from '@emotion/react'

export const metadata: Metadata = {
  title: 'ChatBot',
  description: 'The best insurance ChatBot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        {/* todo / recommendation */}
        {/* <link rel="icon" type="image/png" sizes="36x36" href="/android-chrome-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/android-chrome-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/android-chrome-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/android-chrome-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/android-chrome-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="mask-icon" color="#000" href="/safari-pinned-tab.svg" /> */}
      </head>
      <body>
        <Global styles={GlobalStyles} />
        {children}
      </body>
    </html>
  )
}
