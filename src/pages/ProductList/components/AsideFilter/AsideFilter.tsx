import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'
import Path from 'src/constants/Path'
import { Category } from 'src/types/Category.type'
import { QueryParamsConfig } from '../../ProductList'
import classNames from 'classnames'
import InputNumber from 'src/components/InputNumber'
import { useForm, Controller, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { PriceRangeSchema, priceRangeSchema } from 'src/utils/ZodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { NoUndefinedField } from 'src/types/Util.type'
import ButtonStar from 'src/components/ButtonStar'
import { omit } from 'lodash'

interface Props {
  categories: Category[]
  queryParamsConfig: QueryParamsConfig
}

/**
 * Rule Validate
 * If Pricem_min & Price_max => Price_max >= Price_min
 * Else Only Price_min || Only Price _Max
 */

export default function AsideFilter({ categories, queryParamsConfig }: Props) {
  const navigate = useNavigate()
  const { category: currentCategory } = queryParamsConfig

  const {
    control,
    handleSubmit,
    trigger,
    reset,
    formState: { errors }
  } = useForm<NoUndefinedField<PriceRangeSchema>>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    resolver: zodResolver(priceRangeSchema),
    shouldFocusError: false
  })

  const onSubmitError: SubmitErrorHandler<NoUndefinedField<PriceRangeSchema>> = () => {}
  const onSubmit: SubmitHandler<NoUndefinedField<PriceRangeSchema>> = (data) => {
    navigate({
      pathname: Path.home,
      search: createSearchParams({
        ...queryParamsConfig,
        price_min: data.price_min,
        price_max: data.price_max
      }).toString()
    })
  }

  const handleClearAll = () => {
    navigate({
      pathname: Path.home,
      search: createSearchParams(
        omit(queryParamsConfig, ['category', 'price_min', 'price_max', 'rating_filter'])
      ).toString()
    })
    reset()
  }
  return (
    <div className='py-4'>
      <Link
        to={Path.home}
        className={classNames('flex items-center uppercase ', {
          'font-bold text-main': !currentCategory
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
        <form className='mt-2' onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <div className='flex items-center justify-center space-x-2'>
            <Controller
              name='price_min'
              control={control}
              render={({ field }) => (
                <InputNumber
                  placeholder='₫ TỪ'
                  className='grow'
                  {...field}
                  classNameError='hidden'
                  classNameInput='p-1 text-sm w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                />
              )}
            />
            <div className='w-6 border-b border-gray-500'></div>
            <Controller
              name='price_max'
              control={control}
              render={({ field }) => (
                <InputNumber
                  placeholder='₫ ĐẾN'
                  className='grow'
                  classNameError='hidden'
                  {...field}
                  onChange={(event) => {
                    field.onChange(event)
                    trigger('price_min')
                  }}
                  classNameInput='p-1 text-sm w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                />
              )}
            />
          </div>
          <div className='mt-1 min-h-[1.5rem] text-center text-sm text-red-600'>{errors.price_min?.message}</div>
          <Button className='w-full rounded-sm border bg-main py-2 capitalize text-white hover:bg-main/80'>
            Áp dụng
          </Button>
        </form>
      </div>
      <div className='my-4 h-[1px] border-b'></div>

      <div className='my-3 text-sm'>
        <div>Đánh giá</div>
        <ButtonStar queryParamsConfig={queryParamsConfig} />
      </div>
      <div className='my-4 h-[1px] border-b'></div>
      <Button
        onClick={handleClearAll}
        className='w-full rounded-sm border bg-main py-2 capitalize text-white hover:bg-main/80'
      >
        Xóa tất cả
      </Button>
    </div>
  )
}
