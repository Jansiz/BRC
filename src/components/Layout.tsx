import { useEffect, useId, useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Head from 'next/head'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Barrie Real Estate Collection</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e1c340" />
        <meta name="msapplication-TileColor" content="#e1c340" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
