'use client'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import Image from 'next/image'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Cta_speakers() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const speakerPerks = [
    'Receive professionally recorded content of your session',
    'Share your knowledge with a highly engaged audience',
    'Build connections with like-minded industry professionals',
    'Expand your influence in the Barrie real estate community'
  ]

  const attendeeProfile = [
    'Age Range: 25–45 years old',
    'Mix of seasoned professionals and aspiring investors',
    'Focus on investment properties and wealth generation',
    'Diverse mix of real estate professionals and service providers',
    'Motivated learners seeking actionable insights'
  ]

  const presentationGuidelines = [
    'Professional, TED Talk-style presentations',
    'Educational content without sales pitches',
    'High-quality visuals and minimal text',
    'Submit materials two weeks before event'
  ]

  return (
    <div className="bg-white">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Back to Home section */}
      <div className="w-full border-b border-[#2e2e2e]/10">
        <Container>
          <div className="py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => router.push('/')}
              className="group inline-flex items-center text-sm sm:text-base font-medium text-[#2e2e2e]/60 hover:text-[#006bd3] transition-colors duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" 
                />
              </svg>
              Back to Homepage
            </button>
          </div>
        </Container>
      </div>

      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-5xl font-medium tracking-tight text-[#2e2e2e] sm:text-6xl">
              Shape the Future of Real Estate
            </h1>
            <p className="mt-6 text-2xl text-[#006bd3] font-semibold">
              Become a Featured Speaker at BREC
            </p>
            <div className="mt-10 overflow-hidden rounded-3xl">
              <Image
                src="/images/speaker.jpg"
                alt="Panel discussion with industry experts"
                width={900}
                height={500}
                className="w-full object-cover h-[500px] object-[center_30%]"
                priority
              />
            </div>
          </div>

          <div className="mt-16 mx-auto max-w-3xl">
            <div className="space-y-8 text-lg text-[#2e2e2e]/80 sm:text-xl">
              <p>
                We&apos;re thrilled to announce the launch of the Barrie Real Estate Collective (BREC), 
                dedicated to providing meaningful education and networking opportunities for real estate 
                professionals and investors in Barrie.
              </p>
              <p>
                Our inaugural event explores &quot;AI in the Real Estate Transaction: Transforming the Process 
                from Start to Finish&quot; - a half-day gathering of industry leaders sharing actionable 
                strategies for leveraging AI.
              </p>
            </div>

            {/* Speaker Perks */}
            <div className="mt-16">
              <h2 className="text-3xl font-semibold text-[#2e2e2e] sm:text-4xl">
                Speaker Perks
              </h2>
              <ul className="mt-8 space-y-4 text-lg text-[#2e2e2e]/80 sm:text-xl">
                {speakerPerks.map((perk, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-[#006bd3]">•</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Attendee Profile */}
            <div className="mt-16">
              <h2 className="text-3xl font-semibold text-[#2e2e2e] sm:text-4xl">
                Who You&apos;ll Be Speaking To
              </h2>
              <ul className="mt-8 space-y-4 text-lg text-[#2e2e2e]/80 sm:text-xl">
                {attendeeProfile.map((profile, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-[#006bd3]">•</span>
                    {profile}
                  </li>
                ))}
              </ul>
            </div>

            {/* Presentation Guidelines */}
            <div className="mt-16">
              <h2 className="text-3xl font-semibold text-[#2e2e2e] sm:text-4xl">
                Presentation Guidelines
              </h2>
              <ul className="mt-8 space-y-4 text-lg text-[#2e2e2e]/80 sm:text-xl">
                {presentationGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-[#006bd3]">•</span>
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Details */}
            <div className="mt-16 bg-[#006bd3]/5 rounded-3xl p-8 sm:p-10">
              <h2 className="text-3xl font-semibold text-[#2e2e2e] sm:text-4xl">
                Event Details
              </h2>
              <div className="mt-6 space-y-4 text-lg text-[#2e2e2e]/80 sm:text-xl">
                <p><strong>Date:</strong> March 2nd, 2025</p>
                <p><strong>Time:</strong> 1:00 PM - 5:00 PM</p>
                <p><strong>Location:</strong> Liars, Barrie, ON</p>
                <p><strong>Format:</strong> Keynote presentations, workshops, and panel discussions</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-semibold text-[#2e2e2e] sm:text-4xl">
                Ready to Share Your Expertise?
              </h2>
              <p className="mt-4 text-lg text-[#2e2e2e]/80 sm:text-xl">
                Submit your application to speak at BREC
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <Button 
                  onClick={() => setIsModalOpen(true)} 
                  className="text-lg"
                >
                  Apply to Speak
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
