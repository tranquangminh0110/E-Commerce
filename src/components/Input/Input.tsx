import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  register?: UseFormRegister<any>
  children?: React.ReactNode
  rules?: RegisterOptions
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

export default function Input({
  children,
  name,
  register,
  className,
  errorMessage,
  rules,
  classNameError = 'mt-1 min-h-[1.5rem] text-sm text-red-600',
  classNameInput = 'w-full rounded-sm  border border-gray-300 p-3 text-base outline-none placeholder:font-extralight focus:border-gray-500 focus:shadow-sm',
  ...rest
}: Props) {
  const isChildren = Boolean(children)
  const registerClone = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input className={classNameInput} {...rest} {...registerClone} />
      {isChildren ? (
        <>
          <div className='flex items-center justify-between'>
            <div className={classNameError}>{errorMessage}</div>
            {children}
          </div>
        </>
      ) : (
        <div className={classNameError}>{errorMessage}</div>
      )}
    </div>
  )
}
