import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'

export default function Brec() {
  return (
    <div className="mt-8 pb-16 sm:mt-16 sm:pb-40">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32">
          <div className="px-6 lg:px-0">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-16 sm:mt-24 lg:mt-8">
                  <a href="#schedule" className="inline-flex items-center gap-x-4 sm:gap-x-6">
                    <span className="inline-flex items-center rounded-full bg-[#006bd3]/10 px-3 py-1 text-sm sm:text-lg font-medium text-[#006bd3] ring-1 ring-inset ring-[#006bd3]/20 whitespace-nowrap">
                      Join us March 2nd, 2025
                    </span>
                    <span className="inline-flex items-center text-sm sm:text-lg font-medium text-[#2e2e2e]/70 whitespace-nowrap">
                      View schedule
                      <ChevronRightIcon className="ml-2 h-5 w-5 text-[#2e2e2e]/40" aria-hidden="true" />
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-[#2e2e2e] sm:text-6xl">
                  2025 AI Summit by BREC
                </h1>
                <p className="mt-6 text-xl font-medium text-[#2e2e2e]/80 sm:text-2xl">
                  Transforming Real Estate Transactions with Artificial Intelligence
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button href="#tickets" className="text-lg">Get tickets</Button>
                  <a href="#hero" className="text-lg font-semibold text-[#2e2e2e] hover:text-[#006bd3]">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-full">
            <div className="relative rounded-3xl bg-[#006bd3]">
              <img
                src="/images/brec-cover.jpg"
                alt="BREC organizers"
                className="w-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-[#006bd3]/10 mix-blend-multiply rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
