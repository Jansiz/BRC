import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-8">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo />
        <p className="mt-4 text-sm text-slate-500 text-center md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Barrie Realestate Collection All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
