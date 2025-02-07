import { Container } from '@/components/Container'
import Image from 'next/image'

export function Map() {
  return (
    <section id="location" className="py-10 sm:py-32 bg-slate-50">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {/* Venue Information */}
            <div className="lg:pr-8">
              <h2 className="text-4xl font-medium tracking-tight text-[#2e2e2e] sm:text-5xl">
                Venue Location
              </h2>
              <div className="mt-6 space-y-6 text-lg text-[#2e2e2e]/80 sm:text-xl">
                <div>
                  <h3 className="font-semibold text-[#2e2e2e]">Liars</h3>
                  <p>34 Dunlop Street E</p>
                  <p>Barrie, ON</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2e2e2e]">Parking</h3>
                  <p>Underground parking available behind the building on Collier Street</p>
                </div>
                <div>
                  <a 
                    href="https://maps.google.com/?q=34+Dunlop+Street+E,+Barrie+ON" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#006bd3] hover:text-[#006bd3]/80"
                  >
                    Get Directions
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#006bd3]/10 lg:aspect-[3/2]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/Liars-map.png"
                  alt="Map showing location of Liars at 34 Dunlop Street E, Barrie ON"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
