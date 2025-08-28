import { Mail } from 'lucide-react'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface InputProps extends ComponentProps<'input'> {
  isError?: boolean
}

export function Input({ isError = false, className, ...props }: InputProps) {
  return (
    <div
      data-error={isError}
      className="group data-[error=true]:border-danger flex h-12 transform items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 duration-300 focus-within:border-gray-100">
      <span className="group-data-[error=true]:text-danger shrink-0 text-gray-500 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100">
        <Mail />
      </span>{' '}
      <input
        {...props}
        className={cn('flex-1 placeholder-gray-400 outline-0', className)}
      />
    </div>
  )
}

interface InputRootProps extends ComponentProps<'div'> {
  isError?: boolean
}

function InputRoot({ isError, className, ...props }: InputRootProps) {
  return (
    <div
      {...props}
      data-error={isError}
      className={cn(
        'group data-[error=true]:border-danger flex h-12 transform items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 duration-300 focus-within:border-gray-100',
        className,
      )}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {
  isError?: boolean
}

function InputIcon({ className, ...props }: InputIconProps) {
  return (
    <span
      {...props}
      className={cn(
        'group-data-[error=true]:text-danger shrink-0 text-gray-500 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100',
        className,
      )}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {
  isError?: boolean
}

function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      {...props}
      className={cn('flex-1 placeholder-gray-400 outline-0', className)}
    />
  )
}

export { InputRoot, InputIcon, InputField }
