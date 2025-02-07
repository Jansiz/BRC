'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

type SpeakerModalProps = {
  isOpen: boolean
  onClose: () => void
  speaker: {
    name: string
    role: string
    image: {
      src: string
      width: number
      height: number
    }
    bio: string
    expertise: string[]
    linkedin?: string
    twitter?: string
  }
}

export function SpeakerModal({ isOpen, onClose, speaker }: SpeakerModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="flex items-center">
                      <div className="relative h-20 w-20 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src={speaker.image.src}
                          alt={speaker.name}
                          fill
                        />
                      </div>
                      <div className="ml-4">
                        <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-[#2e2e2e]">
                          {speaker.name}
                        </Dialog.Title>
                        <p className="mt-1 text-lg text-[#2e2e2e]/80">{speaker.role}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-base text-[#2e2e2e]/80 leading-relaxed">
                        {speaker.bio}
                      </p>
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-[#2e2e2e]">Areas of Expertise:</h4>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {speaker.expertise.map((item) => (
                            <li
                              key={item}
                              className="rounded-full bg-[#006bd3]/10 px-3 py-1 text-sm text-[#006bd3]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {(speaker.linkedin || speaker.twitter) && (
                        <div className="mt-6 flex gap-4">
                          {speaker.linkedin && (
                            <a
                              href={speaker.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#006bd3] hover:text-[#006bd3]/80"
                            >
                              LinkedIn Profile
                            </a>
                          )}
                          {speaker.twitter && (
                            <a
                              href={speaker.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#006bd3] hover:text-[#006bd3]/80"
                            >
                              Twitter Profile
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} 