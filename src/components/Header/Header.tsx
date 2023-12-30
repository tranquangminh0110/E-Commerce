import { Link } from 'react-router-dom'
import Popover from '../Popover'
export default function Header() {
  return (
    <header className='bg-2 bg-main pb-5'>
      <div className='container'>
        <div className='flex justify-between py-2'>
          <div className='flex items-center space-x-2 text-[13px] text-white'>
            <Link className='hover:text-hoverText' to='/'>
              Trang chủ Shopee
            </Link>
            <div className='h-3/4 border-r-2 border-gray-400/50'></div>

            <Popover
              renderPopover={
                <div className='flex flex-col justify-center rounded bg-white'>
                  <img
                    className='h-20 w-20'
                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png'
                    alt=''
                  />
                </div>
              }
              offSet={10}
            >
              <Link className='hover:text-hoverText' to='https://shopee.vn/web/'>
                Tải ứng dụng
              </Link>
            </Popover>
            <div className='h-3/4 border-r-2 border-gray-400/50'></div>
            <span>Kết nối </span>
          </div>
          <div className='flex cursor-pointer space-x-3 text-[13px] text-white'>
            {/* Notificate */}
            <Popover className='flex items-center space-x-1 hover:text-hoverText' renderPopover={<>updating..</>}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
                />
              </svg>
              <span>Thông báo</span>
            </Popover>
            {/* Support */}
            <Popover className='flex items-center space-x-1 hover:text-hoverText' renderPopover={<>update</>}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                />
              </svg>
              <span>Hỗ trợ</span>
            </Popover>
            {/* Language */}
            <Popover
              className='flex items-center space-x-1 hover:text-hoverText'
              renderPopover={
                <div className='rounded-sm border border-gray-200 bg-white shadow-md'>
                  <div className='flex flex-col px-3 py-2'>
                    <button className='px-3 py-1 hover:text-main'>Tiếng Việt</button>
                    <button className='px-3 py-1 hover:text-main'>English</button>
                  </div>
                </div>
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
              <span>Tiếng Việt</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </Popover>

            {/* Profile */}
            <Popover
              className='flex items-center hover:text-hoverText'
              renderPopover={
                <div className='rounded-sm border border-gray-200 bg-white shadow-md'>
                  <div className='flex flex-col items-stretch'>
                    <Link to='/' className='px-5 py-3 hover:bg-gray-50 hover:text-[#10b981]'>
                      Tài khoản của tôi
                    </Link>
                    <Link to='/' className='px-5 py-3 hover:bg-gray-50 hover:text-[#10b981]'>
                      Đơn mua
                    </Link>
                    <button className='px-5 py-3 text-left hover:bg-gray-50 hover:text-[#10b981]'>Đăng xuất</button>
                  </div>
                </div>
              }
            >
              <div className='mr-2 h-6 w-6 flex-shrink-0 '>
                <img
                  className='h-full w-full rounded-full object-cover'
                  src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
                  alt=''
                />
              </div>
              <span>bibabibum0110</span>
            </Popover>
          </div>
        </div>
        <div className='mt-4 grid grid-cols-12 items-center gap-3'>
          <div className='col-span-3'>
            <Link to='/' className='flex h-full items-center space-x-4'>
              <svg viewBox='0 0 48 48' className='h-8 lg:h-11' fill='white'>
                <path d='M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z' />
              </svg>
              <svg viewBox='0 0 220 44' className='mt-3' width={200} fill='white'>
                <g fill='#fff' fillRule='evenodd' transform='translate(0 -.098)'>
                  <path d='M195.78 30.899a10.49 10.49 0 0 1-6.81 2.484c-5.732 0-10.378-4.53-10.378-10.12 0-5.59 4.646-10.12 10.378-10.12 2.606 0 4.988.937 6.81 2.484.023-1.13.882-1.942 1.938-1.942 1.07 0 1.937.834 1.937 1.989v15.73c0 1.154-.868 1.98-1.937 1.98-1.07 0-1.938-.826-1.938-1.98zm-.062-7.643c0-3.588-3.024-6.497-6.755-6.497-3.73 0-6.754 2.91-6.754 6.497 0 3.588 3.024 6.498 6.754 6.498 3.73 0 6.755-2.91 6.755-6.498zM202.9 25.388V3.558c0-1.07.855-1.938 1.911-1.938s1.912.867 1.912 1.938v22.069c0 .043-.002.087-.004.13-.018 2.461.369 3.293 2.029 3.768 1.016.291 1.553 1.396 1.266 2.426-.237.854-.77 1.377-1.605 1.377h-.18c-.171 0-.347-.024-.52-.073-2.735-.783-4.904-2.78-4.81-7.867zM212.266 25.535V3.558c0-1.07.856-1.938 1.912-1.938s1.912.867 1.912 1.938V25.825c0 .082-.005.163-.015.242-.06 2.212.146 2.858 2.325 3.31 1.034.215 1.632 1.26 1.42 2.309-.186.916-.914 1.527-1.803 1.527-.127 0-.256-.013-.386-.04-2.882-.599-5.553-2.131-5.365-7.638zM97.886 24.307c.095.561.266 1.256.563 2.09 1.317 3.309 5.375 3.3 5.986 3.309 1.753.025 3.396-.331 5.011-1.223.906-.5 1.985-.412 2.556.405.572.818.395 2.028-.723 2.71-2.208 1.348-4.574 1.758-7.01 1.708-3.798-.078-7.4-1.591-9.01-5.204-.733-1.644-1.158-3.561-1.027-5.376.058-2.086.844-3.867 1.047-4.334.928-2.127 2.557-3.814 4.725-4.702 2.646-1.082 6.008-.916 8.53.43 2.936 1.566 4.571 5.136 4.41 8.384-.049.975-.799 1.803-1.817 1.803zm.412-3.333h10.906c-.86-4.592-5.845-4.37-5.845-4.37-2.52.098-4.207 1.555-5.061 4.37zM119.618 24.354c.095.561.266 1.257.563 2.09 1.318 3.31 5.376 3.3 5.986 3.31 1.753.024 3.396-.332 5.012-1.223.905-.5 1.984-.413 2.556.405.571.817.394 2.027-.723 2.71-2.209 1.347-4.574 1.758-7.011 1.707-3.797-.077-7.4-1.591-9.01-5.204-.732-1.644-1.158-3.56-1.026-5.376.058-2.085.843-3.867 1.047-4.333.928-2.127 2.557-3.815 4.725-4.702 2.645-1.083 6.007-.916 8.53.43 2.936 1.565 4.57 5.136 4.409 8.383-.049.976-.798 1.803-1.816 1.803zm.412-3.333h10.907c-.86-4.592-5.846-4.37-5.846-4.37-2.52.099-4.206 1.555-5.06 4.37zM74.109 30.871v11.367c0 2.34-3.632 2.337-3.632 0V23.806a10.064 10.064 0 0 1 0-1.329v-7.575c0-2.34 3.632-2.337 3.632 0v.51a10.537 10.537 0 0 1 6.768-2.434c5.756 0 10.422 4.55 10.422 10.164 0 5.613-4.666 10.164-10.422 10.164-2.584 0-4.947-.917-6.768-2.435zm0-7.207c.28 3.356 3.2 5.997 6.762 5.997 3.746 0 6.784-2.922 6.784-6.526 0-3.604-3.038-6.526-6.784-6.526-3.562 0-6.483 2.64-6.762 5.997zM57.09 33.306c-5.757 0-10.423-4.55-10.423-10.164s4.666-10.164 10.422-10.164 10.422 4.55 10.422 10.164c0 5.613-4.666 10.164-10.422 10.164zm-.007-3.645c3.747 0 6.784-2.922 6.784-6.526 0-3.604-3.037-6.526-6.784-6.526s-6.784 2.922-6.784 6.526c0 3.604 3.037 6.526 6.784 6.526zM28.69 15.026V2.111c0-2.337-3.631-2.34-3.631 0v29.471c0 2.337 3.631 2.341 3.631 0v-9.695c.015.364.018-.522.273-1.22.953-3.151 3.823-3.751 5.115-3.77 3.696 0 5.652 1.803 5.868 5.408V31.582c0 2.337 3.627 2.341 3.627 0v-6.126c0-1.753.106-3.676 0-4.789-.584-6.843-9.5-9.68-14.455-5.979a9.572 9.572 0 0 0-.428.338zM4.294 2.62c-2.156 1.909-3.15 5.385-2.369 8.155.678 2.4 2.66 4.27 4.803 5.323 2.222 1.09 4.676 1.673 6.564 2.505 1.32.59 2.456 1.153 3.595 2.305 1.138 1.152 1.62 2.586 1.587 3.65-.033 1.085-.441 2.182-1.023 2.869-1.487 1.755-3.889 2.414-6.106 2.303-1.572-.078-3.29-.422-4.692-1.016-1.42-.601-2.671-1.582-3.921-2.438-.807-.553-1.99-.282-2.526.631-.468.811-.098 1.92.693 2.505 2.376 1.757 4.89 3.1 7.808 3.631 2.918.532 5.463.41 8.09-.741 2.462-1.08 4.468-3.198 5.07-5.862.627-2.775-.09-5.41-1.923-7.58-2.21-2.618-5.47-3.626-8.54-4.733a24.208 24.208 0 0 1-3.295-1.423c-1.908-.973-2.883-2.363-2.75-4.528.158-2.578 2.278-3.913 4.906-4.266 2.628-.353 5.337.53 7.25 1.864 1.833 1.194 3.93-1.64 1.833-3.136C15.15-.207 8.288-.914 4.294 2.621z' />
                  <path
                    d='M171.002 3.338c-1.545 4.329-5.841 7.27-10.7 7.186-4.8-.084-8.954-3.103-10.394-7.412-.33-.983-1.407-1.519-2.408-1.197a1.865 1.865 0 0 0-1.217 2.364c1.946 5.823 7.526 9.879 13.954 9.991 6.505.114 12.277-3.84 14.365-9.69a1.866 1.866 0 0 0-1.17-2.39c-.993-.342-2.082.171-2.43 1.148z'
                    fillRule='nonzero'
                  />
                  <path d='M173.191 1.8a1.98 1.98 0 0 1 1.98 1.98v27.546a1.98 1.98 0 1 1-3.96 0V3.78a1.98 1.98 0 0 1 1.98-1.98zM147.807 1.8a1.98 1.98 0 0 1 1.98 1.98v27.546a1.98 1.98 0 1 1-3.96 0V3.78a1.98 1.98 0 0 1 1.98-1.98z' />
                  <circle cx='173.101' cy='3.691' r='2.07' />
                  <circle cx='147.897' cy='3.691' r='2.07' />
                </g>
              </svg>
            </Link>
          </div>
          <div className='col-span-5 col-start-7 rounded-sm bg-white'>
            <form className='flex h-10 items-center p-1'>
              <input
                type='search'
                placeholder='FREE SHIP ĐƠN TỪ 0Đ'
                className='flex-grow border-none bg-transparent px-3 py-3 text-black outline-none placeholder:text-sm'
              />
              <button
                className='flex h-8 flex-shrink-0 items-center rounded-sm bg-main px-5 py-2.5 hover:opacity-85'
                type='submit'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='white'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className='col-span-1 flex items-center justify-center'>
            <Link to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='white'
                className='h-7 w-7'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
