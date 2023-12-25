import { useState } from 'react'
import { Link } from 'react-router-dom'
import HiddenEye from 'src/components/Icons/HiddenEye'
import QRLogin from 'src/components/Icons/QRLogin'
import VisibleEye from 'src/components/Icons/VisibleEye'

export default function Register() {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

  const handleVisiblePassword = () => {
    setVisiblePassword((prevState) => !prevState)
  }
  return (
    <div className='bg-main'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:px-10 lg:py-32'>
          <div className='hidden items-center justify-center lg:visible lg:col-span-3 lg:flex'>
            <img className='h-[450px] w-[450px]' src='/src/assets/BackGroundTheme.png' alt='' />
          </div>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white px-8 py-10 shadow-sm'>
              <div className='flex items-center justify-between'>
                <div className='text-2xl'>Đăng ký</div>
                <div className='flex items-center space-x-3'>
                  <div className='relative flex h-[58px] w-[160px] items-center justify-center rounded-sm border-2 border-[#FFBF00] bg-[#FEFAEC] px-4 py-3'>
                    <div className='text-sm font-bold text-[#FFBF00]'>Đăng nhập với mã QR</div>
                    <div className='top-50 absolute right-[-7px] h-[12px] w-[12px] rotate-45 border border-b-0 border-l-0 border-r-2 border-t-2 border-[#FFBF00] bg-[#FEFAEC]'></div>
                  </div>
                  <QRLogin />
                </div>
              </div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='w-full rounded-sm border border-gray-300 p-3 text-base outline-none placeholder:font-extralight focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email/Số điện thoại/Tên đăng nhập'
                />
                <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'></div>
              </div>
              <div className='relative mt-2'>
                <input
                  type={!visiblePassword ? 'password' : 'text'}
                  name='password'
                  className='w-full rounded-sm border border-gray-300 p-3 text-base outline-none placeholder:font-extralight focus:border-gray-500 focus:shadow-sm'
                  placeholder='Mật khẩu'
                />
                <button type='button' className='absolute right-2 top-3.5' onClick={handleVisiblePassword}>
                  {!visiblePassword ? <HiddenEye /> : <VisibleEye />}
                </button>
                <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'></div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  name='confirm_password'
                  className='w-full rounded-sm border border-gray-300 p-3 text-base outline-none placeholder:font-extralight focus:border-gray-500 focus:shadow-sm'
                  placeholder='Xác nhận mật khẩu'
                />
                <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'></div>
              </div>
              <div className='mt-4'>
                <button
                  type='submit'
                  className='bg-main hover:bg-main/80 w-full rounded-sm px-2 py-4 text-center text-sm uppercase text-white'
                >
                  Đăng ký
                </button>
              </div>
              <div className='mt-2 flex items-center justify-between text-xs font-medium text-[#0055AA]'>
                <Link to='#'>Quên mật khẩu</Link>
                <Link to='#'>Đăng nhập với SMS</Link>
              </div>
              <div className='text-footerInfoText/40 mt-2 flex items-center space-x-3'>
                <div className='border-footerInfoText/40 h-[2px] w-full border-b'></div>
                <div>Hoặc</div>
                <div className='border-footerInfoText/40 h-[2px] w-full border-b'></div>
              </div>
              <div className='mt-3 flex space-x-7'>
                <div className='flex h-10 w-full items-center justify-center  space-x-2 rounded-sm border hover:cursor-pointer hover:bg-gray-100/35'>
                  <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width={25} height={25} viewBox='0 0 48 48'>
                    <linearGradient
                      id='Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1'
                      x1='9.993'
                      x2='40.615'
                      y1='9.993'
                      y2='40.615'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop offset={0} stopColor='#2aa4f4' />
                      <stop offset={1} stopColor='#007ad9' />
                    </linearGradient>
                    <path
                      fill='url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)'
                      d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'
                    />
                    <path
                      fill='#fff'
                      d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'
                    />
                  </svg>
                  <div className='text-sm'>Facebook</div>
                </div>
                <div className='flex h-10 w-full items-center justify-center space-x-2 rounded-sm border hover:cursor-pointer hover:bg-gray-100/35'>
                  <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width={25} height={25} viewBox='0 0 48 48'>
                    <path
                      fill='#fbc02d'
                      d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                    />
                    <path
                      fill='#e53935'
                      d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                    />
                    <path
                      fill='#4caf50'
                      d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                    />
                    <path
                      fill='#1565c0'
                      d='M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                    />
                  </svg>
                  <div className='text-sm'>Google</div>
                </div>
              </div>
              <div className='mt-3'>
                <div className='text-center text-xs'>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</div>
                <div className='text-center text-xs'>
                  <Link className='text-main' to='https://help.shopee.vn/portal/article/77244'>
                    Điều khoản dịch vụ
                  </Link>{' '}
                  &{' '}
                  <Link className='text-main' to='https://help.shopee.vn/portal/article/77243'>
                    Chính sách bảo mật
                  </Link>
                </div>
              </div>
              <div className='mt-3 text-center text-sm'>
                <span className='text-[#00000042]'>Bạn đã có tài khoản? </span>
                <Link className='text-main' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
