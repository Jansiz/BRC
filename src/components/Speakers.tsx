'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
// import { SpeakerModal } from '@/components/SpeakerModal'

/* Commented out actual speakers for later use
const speakers = [
  {
    name: 'Ronni Cantadore',
    role: 'Mortgage Specialist',
    image: {
      src: '/images/avatars/ronni-cantadore.jpg',
      width: 1080,
      height: 1080,
    },
    bio: '...',
    expertise: ['Mortgage Analytics', 'Investment Financing', 'Risk Assessment', 'AI-Driven Lending'],
    linkedin: 'https://linkedin.com',
  },
  // ... other speakers
]
*/

// Placeholder speakers
const speakers = [
  {
    name: 'Speaker Announcement',
    role: 'Coming Soon',
    image: {
      src: '/images/avatars/placeholder.jpg',
      width: 1080,
      height: 1080,
    }
  },
  {
    name: 'Speaker Announcement',
    role: 'Coming Soon',
    image: {
      src: '/images/avatars/placeholder.jpg',
      width: 1080,
      height: 1080,
    }
  },
  {
    name: 'Speaker Announcement',
    role: 'Coming Soon',
    image: {
      src: '/images/avatars/placeholder.jpg',
      width: 1080,
      height: 1080,
    }
  },
]

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  // const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null)

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-[#2e2e2e] sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-4 text-xl tracking-tight text-[#2e2e2e]/80 sm:text-2xl">
            Stay tuned for our exciting lineup of AI and real estate experts.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
          {speakers.map((speaker, speakerIndex) => (
            <div key={speakerIndex}>
              <div 
                className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl"
              >
                <div
                  className={clsx(
                    'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                    'border-[#006bd3]'
                  )}
                />
                <div
                  className="absolute inset-0 bg-indigo-50"
                  style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-[#006bd3]/5">
                    <p className="text-lg font-medium text-[#006bd3]">Coming Soon</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#2e2e2e] sm:text-2xl">
                {speaker.name}
              </h3>
              <p className="-mt-0.5 text-lg tracking-tight text-[#2e2e2e]/80 sm:text-xl">
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
        
        {/* Removed SpeakerModal since we're not using it for now */}
        
        <div className="mt-16 flex flex-col items-center sm:mt-20">
          <h3 className="text-2xl font-semibold tracking-tight text-[#2e2e2e] sm:text-3xl">
            Share Your Expertise
          </h3>
          <p className="mt-1 text-lg text-center text-[#2e2e2e]/80 sm:text-xl max-w-2xl">
            Join our lineup of distinguished speakers and submit your topic today.
            <span className="block mt-1 font-semibold text-[#006bd3]">DEADLINE: February 17th, 2025</span>
          </p>
          <Button href="/become-speaker" className="mt-8 text-lg">
            Be a Speaker
          </Button>
        </div>
      </Container>
    </section>
  )
}
