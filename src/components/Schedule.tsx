'use client'

import { useId, useState } from 'react'
import { Container } from '@/components/Container'
import { ScheduleModal } from '@/components/ScheduleModal'

const schedule = [
  {
    date: 'February 16th',
    dateTime: '2025-02-16',
    summary: 'An afternoon of AI innovation in real estate.',
    timeSlots: [
      {
        name: 'Registration',
        description: 'Start your day by connecting with fellow real estate professionals over coffee and light refreshments. Our registration desk will ensure a smooth check-in process.',
        start: '1:00 PM',
        end: '1:30 PM',
        takeaways: [
          'Network with industry leaders and peers',
          'Receive your event materials and agenda',
          'Enjoy complimentary refreshments'
        ]
      },
      {
        name: 'Opening Keynote',
        description: 'An inspiring session exploring how AI is revolutionizing the real estate industry, with practical insights on embracing this technological transformation.',
        start: '1:30 PM',
        end: '2:15 PM',
        takeaways: [
          'Understand key AI trends shaping real estate',
          'Learn about practical applications of AI in daily operations',
          'Discover strategies for staying ahead of the curve'
        ]
      },
      {
        name: 'AI Tools Workshop',
        description: 'Interactive demonstration of cutting-edge AI tools specifically designed for real estate professionals, with practical examples and implementation strategies.',
        start: '2:30 PM',
        end: '3:15 PM',
        takeaways: [
          'Master essential AI tools for property analysis',
          'Learn to automate repetitive tasks',
          'Implement AI in your current workflow'
        ]
      },
      {
        name: 'Market Analysis',
        description: 'Deep dive into how AI is transforming market analysis and investment strategies, with real-world case studies and actionable insights.',
        start: '3:30 PM',
        end: '4:15 PM',
        takeaways: [
          'Leverage AI for better market predictions',
          'Optimize investment decisions with data',
          'Identify emerging market opportunities'
        ]
      },
      {
        name: 'Networking Session',
        description: 'Conclude the day by building valuable connections with speakers and attendees while discussing key learnings and future opportunities.',
        start: '4:15 PM',
        end: '5:00 PM',
        takeaways: [
          'Build lasting professional relationships',
          'Share insights and experiences',
          'Explore potential collaborations'
        ]
      },
    ],
  },
]

export function Schedule() {
  let id = useId()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<typeof schedule[0]['timeSlots'][0] | null>(null)

  return (
    <section id="schedule" className="py-10 sm:py-10">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-[#2e2e2e] sm:text-5xl">
            Schedule
          </h2>
          <p className="mt-4 text-xl tracking-tight text-[#2e2e2e]/80 sm:text-2xl">
            Join us for an afternoon of insights and innovation in real estate technology.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-[#006bd3]/5">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-5xl">
            <ol role="list" className="space-y-8 text-center">
              {schedule[0].timeSlots.map((timeSlot, timeSlotIndex) => (
                <li
                  key={timeSlot.start}
                  aria-label={`${timeSlot.name} - ${timeSlot.description} from ${timeSlot.start} to ${timeSlot.end}`}
                >
                  {timeSlotIndex > 0 && (
                    <div className="mx-auto mb-8 h-px w-48 bg-[#2e2e2e]/10" />
                  )}
                  <h3 className="text-xl font-semibold text-[#006bd3] sm:text-2xl">
                    {timeSlot.start} - {timeSlot.end}
                  </h3>
                  <button
                    onClick={() => setSelectedTimeSlot(timeSlot)}
                    className="mt-2 text-xl font-semibold tracking-tight text-[#2e2e2e] hover:text-[#006bd3] transition-colors sm:text-2xl"
                  >
                    {timeSlot.name}
                  </button>
                  <p className="mt-2 text-lg text-[#2e2e2e]/80 sm:text-xl">
                    {timeSlot.description.split('.')[0] + '.'}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </div>

      {selectedTimeSlot && (
        <ScheduleModal
          isOpen={!!selectedTimeSlot}
          onClose={() => setSelectedTimeSlot(null)}
          timeSlot={selectedTimeSlot}
        />
      )}
    </section>
  )
}
