import { Link } from 'react-router-dom'

export default function SortProductList() {
  return (
    <div className='bg-[#00000008] px-4 py-4'>
      <div className='flex flex-wrap items-center justify-between'>
        <div className='flex flex-wrap items-center gap-2 text-sm'>
          <div className='mr-2 text-textInSort'>Sắp xếp theo</div>
          <button className='rounded-sm bg-main px-4 py-2 capitalize text-white shadow-sm'>Liên Quan</button>
          <button className='rounded-sm bg-white px-4 py-2 capitalize shadow-sm'>Mới nhất</button>
          <button className='rounded-sm bg-white  px-4 py-2  capitalize shadow-sm'>Bán chạy</button>
          <select
            name=''
            defaultValue='2'
            className='h-9 rounded-sm bg-white px-4 text-left capitalize text-black outline-none'
          >
            <option value='2' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến Cao</option>
            <option value='price:desc'>Giá: Cao đến Thấp</option>
          </select>
        </div>
        <div className='flex items-center text-sm'>
          <div className='mr-6'>1/9</div>
          <Link className='rounded-l-sm border bg-white p-3' to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='#ccc'
              className='h-3 w-3'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
            </svg>
          </Link>
          <Link className='rounded-r-sm border bg-white p-3' to='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='#ccc'
              className='h-3 w-3'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
