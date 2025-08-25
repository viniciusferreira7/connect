import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface IconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'text-blue hover:bg-blue w-full cursor-pointer rounded-md bg-gray-500 p-1.5 font-semibold transition duration-300 ease-in-out hover:text-gray-900',
        className,
      )}
    />
  )
}
