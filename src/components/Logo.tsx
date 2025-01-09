import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        src="/images/logos/logo.png"
        alt="Logo"
        width={70}
        height={70}
        priority
        quality={100}
        className="w-auto h-auto"
      />
    </div>
  )
}
