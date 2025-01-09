'use client'

import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'

const speakers = [

  {
    name: 'Ronni Cantadore',
    role: 'Mortgage Specialist',
    image: {
      src: '/images/avatars/ronni-cantadore.jpg',
      width: 300,
      height: 300,
    },
  },
  {
    name: 'Erhart Cockrin',
    role: 'AI Software Engineer',
    image: {
      src: '/images/avatars/erhart-cockrin.jpg',
      width: 300,
      height: 300,
    },
  },
  {
    name: 'Parker Johnson',
    role: 'Product Manager',
    image: {
      src: '/images/avatars/parker-johnson.jpg',
      width: 300,
      height: 300,
    },
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
          <p className="mt-4 font-display text-2xl tracking-tight text-[#2e2e2e]">
            Learn from the experts on the cutting-edge of deception at the most
            sinister companies.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
          {speakers.map((speaker, speakerIndex) => (
            <div key={speakerIndex}>
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                <div
                  className={clsx(
                    'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                    [
                      'border-blue-300',
                      'border-indigo-300',
                      'border-sky-300',
                    ][speakerIndex % 3],
                  )}
                />
                <div
                  className="absolute inset-0 bg-indigo-50"
                  style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                    src={speaker.image.src}
                    alt=""
                    width={speaker.image.width}
                    height={speaker.image.height}
                    quality={95}
                    priority
                    unoptimized
                    sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-[#2e2e2e]">
                {speaker.name}
              </h3>
              <p className="mt-1 text-base tracking-tight text-slate-500">
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
