import { useEffect, useId, useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Banner } from '@/components/banner'
import Head from 'next/head'
import Brec from './Brec'

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#006bd3" />
        <meta name="msapplication-TileColor" content="#006bd3" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Banner />
      <Header />
      <Brec />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}
