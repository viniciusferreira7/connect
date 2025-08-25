import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'
interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'text-blue hover:bg-blue flex h-12 w-full cursor-pointer items-center justify-between gap-y-2 rounded-xl bg-gray-500 px-5 font-semibold transition duration-300 ease-in-out hover:text-gray-900',
        className,
      )}
    />
  )
}
