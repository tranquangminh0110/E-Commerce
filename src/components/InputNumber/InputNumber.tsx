import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

const InputNumber = React.forwardRef<HTMLInputElement, Props>(function InputNumberInner(
  {
    className,
    errorMessage,
    onChange,
    value,
    classNameError = 'mt-1 min-h-[1.5rem] text-sm text-red-600',
    classNameInput = 'w-full rounded-sm  border border-gray-300 p-3 text-base outline-none placeholder:font-extralight focus:border-gray-500 focus:shadow-sm',
    ...rest
  },
  ref
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if ((/^\d+$/.test(value) || value === '') && onChange) {
      onChange(event)
    }
  }

  return (
    <div className={className}>
      <input onChange={handleChange} className={classNameInput} value={value} {...rest} ref={ref} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
})

export default InputNumber
