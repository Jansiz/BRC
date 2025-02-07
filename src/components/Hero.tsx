import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'

export function Hero() {
  const aiFeatures = [
    'Analyze markets faster and smarter with AI-powered tools',
    'Streamline client and lead management for greater efficiency',
    'Boost deal accuracy by minimizing human error in complex processes',
    'Unlock hidden opportunities through advanced predictive analytics',
    'Transform your transaction process from start to finish'
  ]

  return (
    <div id="hero" className="relative  sm:pb-10 sm:pt-5">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-5xl lg:px-12">
          <p className="font-display text-2xl font-medium tracking-tight text-[#006bd3] sm:text-3xl text-center mb-4">
            Barrie Real Estate Collective Presents
          </p>
          <h1 className="font-display text-6xl font-bold tracking-tighter text-[#2e2e2e] sm:text-7xl text-center">
            AI in Real Estate
          </h1>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#2e2e2e] text-center sm:text-4xl">
            Transforming Transactions from Start to Finish
          </h2>
          <div className="mt-8 space-y-8 font-display text-xl tracking-tight text-[#2e2e2e]/80 sm:text-2xl">
            <p>
              Join us for an immersive afternoon where artificial intelligence meets real estate innovation. 
              Learn how AI is revolutionizing every stage of the transaction process, from property scouting 
              and market analysis to contract management and client relationships.
            </p>
            <p>
              Connect with like-minded investors and gain actionable strategies to streamline your operations. 
              Whether you&apos;re an experienced investor or just starting out, you&apos;ll discover how AI tools can 
              give you a competitive edge in today&apos;s dynamic market.
            </p>
            <div>
              <h3 className="font-semibold text-2xl text-[#2e2e2e] mb-6 sm:text-3xl leading-tight">
                At this exclusive event, you&apos;ll learn how to:
              </h3>
              <ul className="space-y-4 list-disc pl-8">
                {aiFeatures.map((feature, index) => (
                  <li key={index} className="text-xl text-[#2e2e2e]/80 sm:text-2xl">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 space-y-4 text-center">
              <p className="text-xl font-semibold text-[#006bd3] sm:text-2xl">
                March 2nd, 2025 • 1:00 PM - 5:00 PM
              </p>
              <p className="text-xl font-medium sm:text-2xl">
                Liars • Barrie, Ontario
              </p>
              <p className="text-lg text-[#2e2e2e]/90 italic">
                Early bird pricing available - Limited spots remaining
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button href="#tickets" className="mt-12  text-lg">
              Reserve Your Spot Now
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 text-center sm:mt-16 sm:gap-x-16 sm:gap-y-10 lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-center">
            {[
              ['Dynamic Speakers', '10+'],
              ['Influential Investors', '100+'],
            ].map(([name, value]) => (
              <div key={name}>
                <dd className="text-4xl font-bold tracking-tight text-[#006bd3]">
                  {value}
                </dd>
                <dt className="mt-3 text-base font-medium text-[#2e2e2e]/80">
                  {name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
