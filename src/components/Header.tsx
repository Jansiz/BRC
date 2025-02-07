'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon as MenuIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { DiamondIcon } from '@/components/DiamondIcon'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'About', href: '/#hero' },
  { 
    name: 'Speakers', 
    href: '/#speakers',
    dropdown: [
      { name: 'View Speakers', href: '/#speakers' },
      { name: 'Become a Speaker', href: '/become-speaker' },
    ]
  },
  { 
    name: 'Sponsors', 
    href: '/#sponsors',
    dropdown: [
      { name: 'View Sponsors', href: '/#sponsors' },
      { name: 'Become a Sponsor', href: '/#sponsorship' },
    ]
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      const element = document.querySelector(href.substring(1))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }

  return (
    <header className="relative z-50">
      {/* Event Info Bar */}
      <div className="w-full border-b border-[#2e2e2e]/10">
        <Container>
          <div className="flex items-center justify-center py-2 sm:py-3">
            <div className="text-center">
              <p className="text-sm sm:text-lg lg:text-xl">
                <time dateTime="2025-03-02">March 2nd, 2025</time>
                <span className="mx-2">•</span>
                <span>1-5PM</span>
                <span className="mx-2">•</span>
                <span>Barrie, Ontario</span>
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation */}
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu button and navigation */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 -ml-2 text-[#2e2e2e] hover:text-[#006bd3]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      toggleDropdown(item.name)
                    } else {
                      handleNavigation(item.href)
                    }
                  }}
                  className="text-lg text-[#2e2e2e]/80 hover:text-[#006bd3]"
                >
                  {item.name}
                </button>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        onClick={() => handleNavigation(dropdownItem.href)}
                        className="block px-4 py-2 text-sm text-[#2e2e2e]/80 hover:bg-[#006bd3]/10"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Get tickets button */}
          <div className="flex flex-1 justify-end">
            <Button href="#tickets" className="text-sm sm:text-base">
              Get tickets
            </Button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="p-2 text-[#2e2e2e] hover:text-[#006bd3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full text-left px-3 py-2 text-base font-semibold text-[#2e2e2e]/80 hover:text-[#006bd3]"
                        >
                          {item.name}
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => handleNavigation(dropdownItem.href)}
                                className="block py-2 pl-3 pr-4 text-sm text-[#2e2e2e]/60 hover:text-[#006bd3]"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className="block px-3 py-2 text-base font-semibold text-[#2e2e2e]/80 hover:text-[#006bd3]"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

