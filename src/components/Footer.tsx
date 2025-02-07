import Link from 'next/link'
import { Container } from '@/components/Container'

function InstagramIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"/>
      <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-12">
          <nav aria-label="quick links">
            <div className="flex justify-center gap-x-8">
              <a
                href="#hero"
                className="text-lg text-[#2e2e2e]/80 hover:text-[#006bd3] sm:text-xl"
              >
                About
              </a>
              <a
                href="#speakers"
                className="text-lg text-[#2e2e2e]/80 hover:text-[#006bd3] sm:text-xl"
              >
                Speakers
              </a>
              <a
                href="#schedule"
                className="text-lg text-[#2e2e2e]/80 hover:text-[#006bd3] sm:text-xl"
              >
                Schedule
              </a>
              <a
                href="#sponsors"
                className="text-lg text-[#2e2e2e]/80 hover:text-[#006bd3] sm:text-xl"
              >
                Sponsors
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a
              href="https://instagram.com"
              className="group"
              aria-label="BREC on Instagram"
            >
              <InstagramIcon 
                className="h-6 w-6 fill-[#2e2e2e]/60 group-hover:fill-[#2e2e2e]/80" 
              />
            </a>
          </div>
          <p className="mt-6 text-lg text-[#2e2e2e]/60 sm:mt-0 sm:text-xl">
            Copyright &copy; {new Date().getFullYear()} BREC. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center pb-8 text-sm text-[#2e2e2e]/60 gap-2">
          <p>
            Presented by{' '}
            <a 
              href="https://brec-main.vercel.app/" 
              className="text-[#006bd3] hover:text-[#006bd3]/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              BREC
            </a>
          </p>
          <p>
            Powered by{' '}
            <a 
              href="https://www.socialelevate.ca/" 
              className="text-[#006bd3] hover:text-[#006bd3]/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              SocialElevate
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
