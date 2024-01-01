import { useCallback } from 'react'

interface Props {
  ratingScore: number
}

export default function ProductRating({ ratingScore }: Props) {
  const getRatingStar = useCallback((starScore: number) => {
    const newArray: number[] = []
    for (let i = 0; i < 5; i++) {
      const result = starScore - i
      if (result >= 1) {
        newArray.push(1)
      } else if (result < 1 && result > 0) {
        const newResult = result * 10
        newArray.push(Math.round(newResult) / 10)
      } else if (result < 1) {
        newArray.push(0)
      }
    }
    return newArray
  }, [])

  return (
    <div className='flex items-center'>
      {getRatingStar(ratingScore).map((score, index) => (
        <div className='relative' key={index}>
          <div className='absolute overflow-hidden' style={{ width: `${score * 100}%` }}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#ffce3d' className='h-3 w-3'>
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#d5d5d5' className='h-3 w-3'>
            <path
              fillRule='evenodd'
              d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
