import { useCallback } from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import classNames from 'classnames'
import Path from 'src/constants/Path'
import useQueryConfig from 'src/hooks/useQueryConfig'

interface Props {
  pageSize: number
}
export default function Pagination({ pageSize }: Props) {
  const queryParamsConfig = useQueryConfig()
  const currentPage = Number(queryParamsConfig.page)

  const handlePagination = useCallback((totalPages: number, currentPage: number, range: number) => {
    const newPagination: number[] = []

    for (let i = 0; i < totalPages; i++) {
      if (i < 2 || i >= totalPages - 2) {
        newPagination.push(i + 1)
      } else {
        newPagination.push(0)
      }
    }

    const indexOfCurrentPage = currentPage - 1

    if (indexOfCurrentPage >= 0 && indexOfCurrentPage < totalPages) {
      newPagination[indexOfCurrentPage] = currentPage

      for (let i = 1; i <= range; i++) {
        if (indexOfCurrentPage + i < totalPages) {
          newPagination[indexOfCurrentPage + i] = currentPage + i
        }

        if (indexOfCurrentPage - i >= 0) {
          newPagination[indexOfCurrentPage - i] = currentPage - i
        }
      }
    } else {
      for (let i = 1; i <= range && indexOfCurrentPage - i >= 0; i++) {
        newPagination[indexOfCurrentPage - i] = currentPage - i
      }
    }

    return newPagination.filter((num, index, array) => {
      return num !== 0 || (index > 0 && array[index - 1] !== 0)
    })
  }, [])

  return (
    <div className='mt-10 flex items-center justify-center space-x-10'>
      {currentPage === 1 ? (
        <span className='cursor-not-allowed'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#00000066'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
          </svg>
        </span>
      ) : (
        <Link
          to={{
            pathname: Path.home,
            search: createSearchParams({
              ...queryParamsConfig,
              page: String(currentPage - 1)
            }).toString()
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#00000066'
            className='h-6 w-6 hover:stroke-[#000000b3]'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
          </svg>
        </Link>
      )}
      <div className='flex items-center justify-center space-x-4'>
        {handlePagination(pageSize, currentPage, 2).map((pageNumber, index) => {
          if (pageNumber !== 0) {
            if (currentPage === pageNumber) {
              return (
                <span
                  key={index}
                  className={classNames('rounded-sm px-4 py-1.5 ', {
                    'bg-main text-white': currentPage === pageNumber,
                    'text-[#00000066] hover:text-main': currentPage !== pageNumber
                  })}
                >
                  {pageNumber}
                </span>
              )
            } else {
              return (
                <Link
                  to={{
                    pathname: Path.home,
                    search: createSearchParams({
                      ...queryParamsConfig,
                      page: String(pageNumber)
                    }).toString()
                  }}
                  key={index}
                  className={classNames('rounded-sm px-4 py-1.5 ', {
                    'bg-main text-white': currentPage === pageNumber,
                    'text-[#00000066] hover:text-main': currentPage !== pageNumber
                  })}
                >
                  {pageNumber}
                </Link>
              )
            }
          } else {
            return (
              <span key={index} className=' px-4 py-1.5 text-[#00000066]'>
                ...
              </span>
            )
          }
        })}
      </div>
      {currentPage === pageSize ? (
        <span className='cursor-not-allowed'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#00000066'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </span>
      ) : (
        <Link
          to={{
            pathname: Path.home,
            search: createSearchParams({
              ...queryParamsConfig,
              page: String(currentPage + 1)
            }).toString()
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#00000066'
            className='h-6 w-6 hover:stroke-[#000000b3]'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </Link>
      )}
    </div>
  )
}
