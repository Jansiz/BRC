'use client'

import { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const bannerDismissed = localStorage.getItem('bannerDismissed')
    if (bannerDismissed === 'true') {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('bannerDismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#006bd3]">
      <div className="relative isolate mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-4 py-2.5 sm:px-6">
        <div className="flex flex-1 items-center justify-center gap-x-3 sm:gap-x-4">
          <p className="text-sm leading-6 text-white sm:flex sm:items-center">
            <strong className="font-semibold">Limited Time Offer</strong>
            <svg viewBox="0 0 2 2" className="mx-2 hidden h-0.5 w-0.5 fill-current sm:inline" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <span className="hidden sm:inline">Save 40% on Early Bird Tickets</span>
            <span className="sm:hidden"> - Save 40% on Early Bird Tickets</span>
          </p>
          <a
            href="#tickets"
            className="flex-none rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#006bd3] shadow-sm hover:bg-white/90"
          >
            Get tickets
          </a>
        </div>
        <button
          type="button"
          className="-m-3 flex-none p-3 text-white hover:bg-[#006bd3]/90"
          onClick={handleDismiss}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
