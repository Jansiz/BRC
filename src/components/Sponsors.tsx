import Image from 'next/image'
import { Container } from '@/components/Container'

const sponsors = [
  {
    name: 'Laravel',
    logo: '/images/logos/laravel.svg',
  },
  {
    name: 'Mirage',
    logo: '/images/logos/mirage.svg',
  },
  {
    name: 'Statamic',
    logo: '/images/logos/statamic.svg',
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-[#2e2e2e] sm:text-5xl">
          Our Sponsors
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image 
                src={sponsor.logo} 
                alt={sponsor.name} 
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
