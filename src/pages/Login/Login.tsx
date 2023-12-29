import { Dialog, Transition } from '@headlessui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, Fragment } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import HiddenEye from 'src/components/Icons/HiddenEye'
import QRLogin from 'src/components/Icons/QRLogin'
import VisibleEye from 'src/components/Icons/VisibleEye'
import Input from 'src/components/Input'
import { useLoginAccount } from 'src/services/mutations/User.mutatios'
import { CommonResponseAPI } from 'src/types/CommonResponse.type'
import { isUnprocessableEntity } from 'src/utils/Utils'
import { LoginSchema, loginSchema } from 'src/utils/ZodSchema'

type FormData = LoginSchema

export default function Login() {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)
  const [isVisibleQRLogin, setIsVisibleQRLogin] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  })

  const loginAccountMutation = useLoginAccount()
  const handleVisiblePassword = () => {
    setIsVisiblePassword((prevState) => !prevState)
  }

  const handleVisibleQRLogin = () => {
    setIsVisibleQRLogin((prevState) => !prevState)
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        if (isUnprocessableEntity<CommonResponseAPI<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  }

  return (
    <div className='bg-main'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:px-10 lg:py-32'>
          <div className='hidden items-center justify-center lg:visible lg:col-span-3 lg:flex'>
            <img className='h-[450px] w-[450px]' src='/src/assets/BackGroundTheme.png' alt='' />
          </div>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white px-8 py-10 shadow-sm' onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='flex items-center justify-between'>
                <div className='text-2xl'>Đăng nhập</div>
                <div className='flex items-center space-x-3'>
                  <div className='relative flex h-[58px] w-[160px] items-center justify-center rounded-sm border-2 border-[#FFBF00] bg-[#FEFAEC] px-4 py-3'>
                    <div className='text-sm font-bold text-[#FFBF00]'>Đăng nhập với mã QR</div>
                    <div className='top-50 absolute right-[-7px] h-[12px] w-[12px] rotate-45 border border-b-0 border-l-0 border-r-2 border-t-2 border-[#FFBF00] bg-[#FEFAEC]'></div>
                  </div>
                  <QRLogin handleVisibleQRLogin={handleVisibleQRLogin} />
                </div>
              </div>
              <Input
                name='email'
                register={register}
                type='email'
                autoComplete='on'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email/Số điện thoại/Tên đăng nhập'
              />
              <Input
                name='password'
                register={register}
                type={!isVisiblePassword ? 'password' : 'text'}
                autoComplete='on'
                className='relative mt-2'
                placeholder='Mật khẩu'
                errorMessage={errors.password?.message}
              >
                <button type='button' className='absolute right-2 top-3.5' onClick={handleVisiblePassword}>
                  {isVisiblePassword ? <VisibleEye /> : <HiddenEye />}
                </button>
              </Input>

              <div className='mt-4'>
                <button
                  type='submit'
                  disabled={!isValid}
                  className='w-full rounded-sm bg-main px-2 py-4 text-center text-sm uppercase text-white hover:bg-main/80 disabled:cursor-not-allowed disabled:bg-main/70'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='mt-2 flex items-center justify-between text-xs font-medium text-[#0055AA]'>
                <Link to='#'>Quên mật khẩu</Link>
                <Link to='#'>Đăng nhập với SMS</Link>
              </div>
              <div className='mt-2 flex items-center space-x-3 text-footerInfoText/40'>
                <div className='h-[2px] w-full border-b border-footerInfoText/40'></div>
                <div>Hoặc</div>
                <div className='h-[2px] w-full border-b border-footerInfoText/40'></div>
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
              <div className='mt-3 text-center text-sm'>
                <span className='text-[#00000042]'>Bạn mới biết đến Shopee? </span>
                <Link className='text-main' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Transition appear show={isVisibleQRLogin} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleVisibleQRLogin}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-[350px] transform flex-col overflow-hidden rounded-xl bg-white p-6 text-center align-middle shadow-xl transition-all'>
                  <div className='flex w-full justify-center'>
                    <img className='h-[100px] w-[100px]' src='/src/assets/Update_Logo.png' alt='' />
                  </div>
                  <div className='mt-2 text-center'>
                    <p className='text-sm text-gray-500'>Tính năng này đang được chúng tôi phát triển</p>
                    <p className='text-sm text-gray-500'>vui lòng thử lại sau...</p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={handleVisibleQRLogin}
                    >
                      Đóng
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
