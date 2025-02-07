import Image from 'next/image'
import clsx from 'clsx'

export function BackgroundImage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('absolute inset-0 overflow-hidden bg-indigo-50', className)}
      {...props}
    >
     
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
  )
}
