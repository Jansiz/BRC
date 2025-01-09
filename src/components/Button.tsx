import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  className?: string
  href?: string
  type?: 'submit' | 'button'
  children: React.ReactNode
}

export function Button({
  className,
  href,
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-[#e1c340] p-4 text-base font-semibold text-white hover:bg-[#c5a935] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e1c340] active:text-white/70',
    className,
  )

  return href ? (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  )
}
