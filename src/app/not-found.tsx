import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className="relative flex h-full items-center py-20 sm:py-36">
        <BackgroundImage className="-top-36 bottom-0" />
        <Container className="relative flex w-full flex-col items-center">
          <p className="font-display text-4xl font-bold tracking-tight text-[#2e2e2e] sm:text-5xl">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#2e2e2e]">
            Page not found
          </h1>
          <p className="mt-4 text-lg tracking-tight text-[#2e2e2e]">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Button href="/" className="mt-8">
            Go back home
          </Button>
        </Container>
      </div>
    </Layout>
  )
}
