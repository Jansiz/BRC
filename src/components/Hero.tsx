import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-[#2e2e2e] sm:text-6xl text-center">
            Barrie Real Estate Collection
          </h1>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#2e2e2e] text-center">
            Revolutionizing Real Estate with AI
          </h2>
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-[#2e2e2e]">
            <p>
              Discover how artificial intelligence is transforming the real estate industry. 
              From smarter investment decisions to enhanced property insights, join us at 
              Barrie Real Estate Collective to explore the future of real estate through 
              cutting-edge AI solutions.
            </p>
            <p>
              Network with top investors, industry leaders, and tech innovators to stay 
              ahead in this rapidly evolving market.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '4'],
              ['People Attending', '105'],
              ['Venue', 'LIARS'],
              ['Location', 'Barrie'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm font-bold text-[#e1c340]">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-[#2e2e2e]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
