'use client'

import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { clsx } from 'clsx'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'

// Sponsor data with types
type SponsorTier = 'platinum' | 'gold' | 'silver'

interface Sponsor {
  name: string
  tier: SponsorTier
  logo: string
  website: string
  description: string
}

const sponsors: Sponsor[] = [
  {
    name: 'Laravel',
    tier: 'platinum' satisfies SponsorTier,
    logo: '/images/logos/laravel.svg',
    website: 'https://laravel.com',
    description: 'The PHP Framework for Web Artisans',
  },
  {
    name: 'Statamic',
    tier: 'gold',
    logo: '/images/logos/statamic.svg',
    website: 'https://statamic.com',
    description: 'The flat-first, Laravel + Git powered CMS',
  },
  {
    name: 'Tuple',
    tier: 'silver',
    logo: '/images/logos/tuple.svg',
    website: 'https://tuple.app',
    description: 'The best remote pair programming tool',
  },
  {
    name: 'Mirage',
    tier: 'silver',
    logo: '/images/logos/mirage.svg',
    website: 'https://miragejs.com',
    description: 'API mocking library for frontend developers',
  },
] as const

export function Sponsors() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="sponsors" className="py-10 pb-20 sm:py-32">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div id="sponsorship" className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6">
            <h2 className="text-4xl font-medium tracking-tight text-[#2e2e2e] sm:text-5xl">
              Showcase Your Brand to Influential Real Estate Investors
            </h2>
            <p className="mt-6 text-lg text-[#2e2e2e]/80 sm:text-xl">
              Put your brand in front of a highly engaged audience of real estate investors 
              and professionals actively growing their portfolios. This exclusive event offers 
              premium opportunities to showcase your products and services to decision-makers 
              eager for innovative solutions.
            </p>
            <p className="mt-6 text-lg text-[#2e2e2e]/80 sm:text-xl">
              Stand out as a key partner in the future of real estate by aligning your brand 
              at this dynamic event.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button 
                onClick={() => setIsModalOpen(true)} 
                className="text-lg"
              >
                Secure Your Sponsorship Spot
              </Button>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#006bd3]/10">
              <div className="relative w-full h-full">
                <Image
                  src="/images/screen.jpg"
                  alt="Real estate professionals networking"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[#006bd3]/10 mix-blend-multiply" />
            </div>
          </div>
        </div>

        {/* Meet Our Sponsors Section */}
        <div className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[#2e2e2e] sm:text-4xl">
              Meet Our Sponsors
            </h2>
            <p className="mt-4 text-lg text-[#2e2e2e]/80">
              Leading organizations supporting innovation in real estate
            </p>
          </div>

          {sponsors.length > 0 ? (
            <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col items-center w-full max-w-[200px]"
                  >
                    <div className={clsx(
                      "relative w-full transition duration-300 group-hover:opacity-80",
                      // Different sizes for each tier
                      sponsor.tier === 'platinum' && "h-20 -mt-2", // Larger for platinum
                      sponsor.tier === 'gold' && "h-16",
                      sponsor.tier === 'silver' && "h-14 mt-1" // Slightly smaller for silver
                    )}>
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className={clsx(
                      "absolute -bottom-8 whitespace-nowrap text-sm font-medium px-3 py-1 rounded-full shadow-sm",
                      // Enhanced styling for each tier
                      sponsor.tier === 'platinum' && "bg-gradient-to-r from-[#E5E4E2] via-[#FFFFFF] to-[#C0C0C0] text-gray-800 text-base font-semibold border border-gray-200",
                      sponsor.tier === 'gold' && "bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-yellow-800",
                      sponsor.tier === 'silver' && "bg-gradient-to-r from-[#C0C0C0] to-[#707070] text-white text-xs tracking-wider"
                    )}>
                      {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Sponsor
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-16 rounded-2xl border border-dashed border-[#2e2e2e]/20 p-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#2e2e2e]">
                  Sponsor Spots Available
                </h3>
                <p className="mt-2 text-[#2e2e2e]/80">
                  Be among the first to showcase your brand at this exclusive event.
                </p>
                <Button href="#sponsorship" className="mt-6">
                  Become a Sponsor
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
