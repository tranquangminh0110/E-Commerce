import { Link, createSearchParams } from 'react-router-dom'
import Path from 'src/constants/Path'
import useQueryConfig from 'src/hooks/useQueryConfig'

interface Props {
  className?: string
  category_id: string
  category_title: string
  product_title: string
}
export default function Breadcrumb({ className, category_id, category_title, product_title }: Props) {
  const queryParamsConfig = useQueryConfig()
  return (
    <div>
      <nav className={`flex ${className}`} aria-label='Breadcrumb'>
        <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
          <li className='inline-flex items-center'>
            <Link
              to={Path.home}
              className='inline-flex items-center text-sm font-normal text-blue-700 hover:text-main '
            >
              Shopee
            </Link>
          </li>
          <li>
            <div className='flex items-center'>
              <svg
                className='mx-1 h-3 w-3 text-gray-400 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <Link
                to={{
                  pathname: Path.home,
                  search: createSearchParams({
                    ...queryParamsConfig,
                    category: category_id
                  }).toString()
                }}
                className='ms-1 text-sm font-normal text-blue-700 hover:text-main md:ms-2 '
              >
                {category_title}
              </Link>
            </div>
          </li>
          <li aria-current='page'>
            <div className='flex items-center'>
              <svg
                className='mx-1 h-3 w-3 text-gray-400 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <span className='ms-1 text-sm font-medium text-textMall md:ms-2'>{product_title}</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  )
}
