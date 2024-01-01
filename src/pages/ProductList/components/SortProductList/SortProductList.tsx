import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import Path from 'src/constants/Path'
import { QueryParamsConfig } from '../../ProductList'
import { orderBy, sortBy } from 'src/constants/QueryConfig'
import classNames from 'classnames'
import { ProductListQueryParamsConfig } from 'src/types/Product.type'
import { omit } from 'lodash'

interface Props {
  queryParamsConfig: QueryParamsConfig
  pageSize: number
}
export default function SortProductList({ queryParamsConfig, pageSize }: Props) {
  const navigate = useNavigate()
  const currentPage = Number(queryParamsConfig.page)
  const { sort_by = sortBy.createdAt, order } = queryParamsConfig
  const isActiveSortBy = (sortByValue: Exclude<ProductListQueryParamsConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }

  const handleFilterSortBy = (sortByValue: Exclude<ProductListQueryParamsConfig['sort_by'], undefined>) => () => {
    navigate({
      pathname: Path.home,
      search: createSearchParams(
        omit(
          {
            ...queryParamsConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handleFilterPriceOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const orderValue = event.target.value as Exclude<ProductListQueryParamsConfig['order'], undefined>
    navigate({
      pathname: Path.home,
      search: createSearchParams({
        ...queryParamsConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }

  return (
    <div className='bg-[#00000008] px-4 py-4'>
      <div className='flex flex-wrap items-center justify-between'>
        <div className='flex flex-wrap items-center gap-2 text-sm'>
          <div className='mr-2 text-textInSort'>Sắp xếp theo</div>
          <button
            className={classNames('rounded-sm  px-4 py-2 capitalize shadow-sm', {
              'bg-main text-white': isActiveSortBy(sortBy.view),
              'bg-white text-textMall': !isActiveSortBy(sortBy.view)
            })}
            onClick={handleFilterSortBy('view')}
          >
            Phổ Biến
          </button>
          <button
            className={classNames('rounded-sm px-4 py-2 capitalize  shadow-sm', {
              'bg-main text-white': isActiveSortBy(sortBy.createdAt),
              'bg-white text-textMall': !isActiveSortBy(sortBy.createdAt)
            })}
            onClick={handleFilterSortBy('createdAt')}
          >
            Mới nhất
          </button>
          <button
            className={classNames('rounded-sm px-4 py-2 capitalize  shadow-sm', {
              'bg-main text-white': isActiveSortBy(sortBy.sold),
              'bg-white text-textMall': !isActiveSortBy(sortBy.sold)
            })}
            onClick={handleFilterSortBy('sold')}
          >
            Bán chạy
          </button>
          <select
            name=''
            className={classNames('h-9 rounded-sm bg-white px-4 text-left capitalize outline-none', {
              'text-main': Boolean(order),
              'text-textMall': Boolean(order) === false
            })}
            value={order || 'defaultTitle'}
            onChange={handleFilterPriceOrder}
          >
            <option value='defaultTitle' disabled>
              Giá
            </option>
            <option value={orderBy.asc}>Giá: Thấp đến Cao</option>
            <option value={orderBy.desc}>Giá: Cao đến Thấp</option>
          </select>
        </div>
        <div className='flex items-center text-sm'>
          <div className='mr-6 text-textMall'>
            <span className='text-main'>{currentPage}</span>/{pageSize}
          </div>
          {currentPage === 1 ? (
            <span className='cursor-not-allowed rounded-l-sm border border-gray-300 bg-white p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='#00000066'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
              </svg>
            </span>
          ) : (
            <Link
              className='rounded-l-sm border border-gray-300 bg-white/10 p-3 duration-150 hover:bg-white'
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
                strokeWidth={2.5}
                stroke='#000000b3'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
              </svg>
            </Link>
          )}
          {currentPage === pageSize ? (
            <span className='cursor-not-allowed rounded-r-sm border border-gray-300 bg-white p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='#00000066'
                className='h-3 w-3 '
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </span>
          ) : (
            <Link
              className='rounded-r-sm border border-gray-300 bg-white/10 p-3 shadow-sm duration-150 hover:bg-white'
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
                strokeWidth={2.5}
                stroke='#000000b3'
                className='h-3 w-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
