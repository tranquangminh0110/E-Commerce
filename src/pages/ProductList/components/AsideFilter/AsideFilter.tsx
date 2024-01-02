import { Link, createSearchParams } from 'react-router-dom'
import Button from 'src/components/Button'
import Path from 'src/constants/Path'
import { Category } from 'src/types/Category.type'
import { QueryParamsConfig } from '../../ProductList'
import classNames from 'classnames'
import Input from 'src/components/Input'

interface Props {
  categories: Category[]
  queryParamsConfig: QueryParamsConfig
}

export default function AsideFilter({ categories, queryParamsConfig }: Props) {
  const { category: currentCategory } = queryParamsConfig

  return (
    <div className='py-4'>
      <Link
        to={Path.home}
        className={classNames('flex items-center uppercase text-main', {
          'font-bold': !currentCategory
        })}
      >
        <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div>Tất cả danh mục</div>
      </Link>
      <div className='my-4 h-[1px] border-b'></div>
      {categories && (
        <ul className='ml-3 flex flex-col space-y-3 text-sm'>
          {categories.map((categoryItem) => {
            const isActiveCategory = categoryItem._id === currentCategory
            return (
              <li key={categoryItem._id}>
                <Link
                  to={{
                    pathname: Path.home,
                    search: createSearchParams({
                      ...queryParamsConfig,
                      category: categoryItem._id
                    }).toString()
                  }}
                  className={classNames('relative flex items-center pl-1 font-semibold text-main', {
                    'font-semibold text-main': isActiveCategory,
                    'font-normal text-textMall': !isActiveCategory
                  })}
                >
                  {isActiveCategory && (
                    <svg viewBox='0 0 4 7' className='absolute left-[-6px] h-2 w-2 fill-main '>
                      <polygon points='4 3.5 0 0 0 7' />
                    </svg>
                  )}
                  <div className='ml-1'>{categoryItem.name}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      )}

      <Link to={Path.home} className='mt-10 flex items-center font-bold uppercase text-textMall'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
          />
        </svg>
        <span>bộ lọc tìm kiếm</span>
      </Link>
      <div className='my-4 h-[1px] border-b'></div>

      <div className='my-4 text-sm font-normal capitalize'>Theo danh mục</div>
      <ul className='flex flex-col space-y-3 text-sm font-normal'>
        <li className='flex items-start justify-start space-x-1'>
          <input id='checkb1' type='checkbox' />
          <label htmlFor='checkb1' className='flex-wrap'>
            Áo quần mùa xuân / Áo quần sale (34k+)
          </label>
        </li>
        <li className='flex items-start justify-start space-x-1'>
          <input id='checkb2' type='checkbox' />
          <label htmlFor='checkb2' className='flex-wrap'>
            Phụ kiện mùa xuân chơi tết (14k+)
          </label>
        </li>
        <li className='flex items-start justify-start space-x-1'>
          <input id='checbk3' type='checkbox' />
          <label htmlFor='checbk3' className='flex-wrap'>
            Trang trí nhà cửa (65k+)
          </label>
        </li>
      </ul>
      <div className='my-4 h-[1px] border-b'></div>

      <div className='my-5 text-sm'>
        <div>Khoảng giá</div>
        <form className='mt-2'>
          <div className='flex items-center justify-center space-x-2'>
            <Input
              placeholder='₫ TỪ'
              className='grow'
              name='from'
              classNameInput='p-1 text-sm w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
            <div className='mb-7 w-6 border-b border-gray-500'></div>
            <Input
              placeholder='₫ ĐẾN'
              className='grow'
              name='to'
              classNameInput='p-1 text-sm w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
          </div>
          <Button className='w-full rounded-sm border bg-main py-2 capitalize text-white hover:bg-main/80'>
            Áp dụng
          </Button>
        </form>
      </div>
      <div className='my-4 h-[1px] border-b'></div>

      <div className='my-3 text-sm'>
        <div>Đánh giá</div>
        <ul className='my-3'>
          <li className='flex space-x-1 py-1'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg viewBox='0 0 9.5 8' className='h-4 w-4' key={index}>
                  <defs>
                    <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                      <stop offset={0} stopColor='#ffca11' />
                      <stop offset={1} stopColor='#ffad27' />
                    </linearGradient>
                    <polygon
                      id='ratingStar'
                      points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                    />
                  </defs>
                  <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                    <g transform='translate(-876 -1270)'>
                      <g transform='translate(155 992)'>
                        <g transform='translate(600 29)'>
                          <g transform='translate(10 239)'>
                            <g transform='translate(101 10)'>
                              <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              ))}
            <span className=''>trở lên</span>
          </li>
          <li className='flex space-x-1 py-1'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg viewBox='0 0 9.5 8' className='h-4 w-4' key={index}>
                  <defs>
                    <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                      <stop offset={0} stopColor='#ffca11' />
                      <stop offset={1} stopColor='#ffad27' />
                    </linearGradient>
                    <polygon
                      id='ratingStar'
                      points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                    />
                  </defs>
                  <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                    <g transform='translate(-876 -1270)'>
                      <g transform='translate(155 992)'>
                        <g transform='translate(600 29)'>
                          <g transform='translate(10 239)'>
                            <g transform='translate(101 10)'>
                              <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              ))}
            <span className=''>trở lên</span>
          </li>
        </ul>
      </div>
      <div className='my-4 h-[1px] border-b'></div>
      <Button className='w-full rounded-sm border bg-main py-2 capitalize text-white hover:bg-main/80'>
        Xóa tất cả
      </Button>
    </div>
  )
}
