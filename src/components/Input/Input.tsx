/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  children?: React.ReactNode
  autoComplete?: string
}

export default function Input({
  autoComplete,
  children,
  name,
  register,
  type,
  className,
  errorMessage,
  placeholder,
  rules
}: Props) {
  const isChildren = Boolean(children)
  return (
    <div className={className}>
      <input
        type={type}
        autoComplete={autoComplete}
        className='w-full rounded-sm  border border-gray-300 p-3 text-base outline-none placeholder:font-extralight focus:border-gray-500 focus:shadow-sm'
        placeholder={placeholder}
        {...register(name, rules)}
      />
      {isChildren ? (
        <>
          <div className='flex items-center justify-between'>
            <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'>{errorMessage}</div>
            {children}
          </div>
        </>
      ) : (
        <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'>{errorMessage}</div>
      )}
    </div>
  )
}
