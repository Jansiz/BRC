import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }: React.ComponentPropsWithoutRef<'a'>) {
  className = clsx(
    'inline-flex items-center rounded-2xl bg-[#006bd3] px-4 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-[#006bd3]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006bd3]',
    className
  )

  return <a href={href} className={className} {...props} />
}
