import { Link, useMatch } from 'react-router-dom'

export default function RegisterHeader() {
  const isRegister = Boolean(useMatch('/register'))

  return (
    <header className='py-3'>
      <div className='mx-auto max-w-[1200px] px-4 '>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/'>
              <img className='h-12 lg:h-14' src='/src/assets/Official_Logo.png' alt='' />
            </Link>
            <div className='ml-2 mt-1 text-xl lg:text-2xl'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
          </div>
          <Link to='https://help.shopee.vn/portal' target='_blank'>
            <div className='text-main text-sm'>Bạn cần giúp đỡ?</div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
