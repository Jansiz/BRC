import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - BRC',
    default: 'Barrie Real Estate Collective',
  },
  description:
    'Barrie Real Estate Collective is a networking and event organization dedicated to connecting real estate professionals, investors, and industry leaders. We host events that foster collaboration, share innovative insights, and empower growth in the real estate sector. Join us to stay informed, build meaningful connections, and shape the future of real estate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
        <ScrollToTop />
      </body>
    </html>
  )
}
