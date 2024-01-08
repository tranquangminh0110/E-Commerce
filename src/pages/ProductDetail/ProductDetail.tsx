import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from 'src/components/Breadcrumb'
import ProductRating from 'src/components/RatingStar'
import { useGetProductDetail } from 'src/services/queries/Product.queries'
import { countPercentageDiscount, formatNumberToSocialStyle } from 'src/utils/Utils'
import { Dialog, Transition } from '@headlessui/react'
import InputNumber from 'src/components/InputNumber'
import DOMPurify from 'dompurify'

export default function ProductDetail() {
  const { id } = useParams()
  const mainImageRef = useRef<HTMLImageElement>(null)
  const [slideIndex, setSlideIndex] = useState<number[]>([0, 5])
  const [isOpenSlideImageModal, setIsOpenSlideImageModal] = useState(false)
  const getProductDetailQuery = useGetProductDetail(id as string)
  const productData = getProductDetailQuery.data?.data
  const [mainImage, setMainImage] = useState('')

  const currentImage = useMemo(() => {
    return productData ? productData?.data.images.slice(...slideIndex) : []
  }, [slideIndex, productData])

  useEffect(() => {
    if (productData && currentImage) {
      setMainImage(currentImage[0])
    }
  }, [productData, currentImage])

  const handleNextSlide = () => {
    if (productData && slideIndex[1] < productData.data.images.length) {
      setSlideIndex((prevState) => [prevState[0] + 1, prevState[1] + 1])
    }
  }
  const handlePrevSlide = () => {
    if (productData && slideIndex[0] > 0) {
      setSlideIndex((prevState) => [prevState[0] - 1, prevState[1] - 1])
    }
  }

  const handleChangeMainImage = (image: string) => {
    setMainImage(image)
  }

  const openSlideImageModal = () => {
    setIsOpenSlideImageModal(true)
  }
  const closeSlideImageModal = () => {
    setIsOpenSlideImageModal(false)
  }

  const handleZoomInImage = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const image = mainImageRef.current as HTMLImageElement
    const { naturalHeight, naturalWidth } = image
    // Cách 1: Lấy offsetX, offsetY đơn giản khi chúng ta đã xử lý được bubble event
    // const { offsetX, offsetY } = event.nativeEvent

    // Cách 2: Lấy offsetX, offsetY khi chúng ta không xử lý được bubble event
    const offsetX = event.pageX - (rect.x + window.scrollX)
    const offsetY = event.pageY - (rect.y + window.scrollY)

    const top = offsetY * (1 - naturalHeight / rect.height)
    const left = offsetX * (1 - naturalWidth / rect.width)
    image.style.width = naturalWidth + 'px'
    image.style.height = naturalHeight + 'px'
    image.style.maxWidth = 'unset'
    image.style.top = top + 'px'
    image.style.left = left + 'px'
  }

  const handleZoomOut = () => {
    mainImageRef.current?.removeAttribute('style')
  }

  return (
    productData && (
      <Fragment>
        <div className='bg-mall py-6'>
          <div className='container'>
            <Breadcrumb
              className='mb-3'
              product_title={productData.data.name}
              category_id={productData.data.category._id}
              category_title={productData.data.category.name}
            />
            <div className='bg-white p-4 shadow-sm'>
              <div className='grid grid-cols-12 gap-9'>
                <div className='col-span-5'>
                  <div
                    className='relative w-full overflow-hidden pt-[100%] shadow hover:cursor-zoom-in'
                    aria-hidden={true}
                    onClick={openSlideImageModal}
                    onMouseMove={handleZoomInImage}
                    onMouseLeave={handleZoomOut}
                  >
                    <img
                      className='pointer-events-none absolute left-0 top-0 h-full w-full bg-white object-cover'
                      src={mainImage}
                      ref={mainImageRef}
                      alt={productData.data.name}
                    />
                  </div>
                  <div className='relative mt-6 grid grid-cols-5 gap-1'>
                    <button
                      className='absolute left-0 top-1/2 z-10 flex h-9 w-5 -translate-y-1/2 items-center justify-center bg-black/20'
                      onClick={handlePrevSlide}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2.5}
                        stroke='white'
                        className='h-6 w-6'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                      </svg>
                    </button>
                    <button
                      className='absolute right-0 top-1/2 z-10 flex h-9 w-5 -translate-y-1/2 items-center justify-center bg-black/20'
                      onClick={handleNextSlide}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2.5}
                        stroke='white'
                        className='h-6 w-6'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                      </svg>
                    </button>
                    {currentImage.map((item) => {
                      const isActive = item === mainImage
                      return (
                        <div className='relative col-span-1 w-full pt-[100%]' key={item}>
                          <img
                            className='absolute left-0 top-0 h-full w-full cursor-pointer bg-white object-cover'
                            src={item}
                            alt=''
                            onMouseEnter={() => handleChangeMainImage(item)}
                          />
                          {isActive && <div className='absolute inset-0 border-2 border-main'></div>}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className='col-span-7'>
                  <div className='flex items-start justify-start space-x-2'>
                    <div>
                      <svg viewBox='0 0 30 16' fill='none' xmlns='http://www.w3.org/2000/svg' width={30} height={30}>
                        <path
                          width={40}
                          height={40}
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M0 2C0 0.895431 0.895431 0 2 0L28 0C29.1046 0 30 0.895431 30 2V14C30 15.1046 29.1046 16 28 16H2C0.89543 16 0 15.1046 0 14L0 2Z'
                          fill='#D0011B'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M11.8045 3.00128H10.8673C10.8403 3.00132 10.8137 3.00752 10.7895 3.01939C10.7652 3.03126 10.744 3.0485 10.7274 3.0698L10.151 3.70154C10.1108 3.74133 10.0736 3.78149 10.0397 3.82129L10.0109 3.85512L9.73645 4.1559C9.26611 4.63346 8.55272 5.15874 7.50601 5.1696H7.47399C6.35562 5.1696 5.61724 4.53545 5.18223 4.084L4.2545 3.06788C4.23787 3.04676 4.21666 3.02968 4.19249 3.01792C4.16831 3.00617 4.14178 3.00004 4.1149 3H3.17803C3.13084 3.00008 3.08561 3.01887 3.05224 3.05223C3.01887 3.0856 3.00008 3.13084 3 3.17803V12.8198C3.00008 12.867 3.01887 12.9123 3.05224 12.9456C3.08561 12.979 3.13084 12.9978 3.17803 12.9979H4.11458C4.16177 12.9978 4.207 12.979 4.24037 12.9456C4.27373 12.9123 4.29252 12.867 4.2926 12.8198V5.00726C4.51669 5.20068 4.74894 5.38439 4.9887 5.55788C5.57807 5.9956 6.40375 6.40585 7.47655 6.40585H7.51722C8.53818 6.3953 9.32642 6.03468 9.89137 5.64233L9.89877 5.64155L9.97012 5.58642C10.0506 5.52802 10.1262 5.46926 10.1969 5.41116L10.689 5.03095V12.8198C10.6892 12.867 10.708 12.9122 10.7413 12.9455C10.7747 12.9789 10.8199 12.9977 10.867 12.9979H11.8042C11.8514 12.9977 11.8966 12.9789 11.9299 12.9455C11.9633 12.9122 11.9821 12.867 11.9822 12.8198V3.17931C11.9821 3.1322 11.9633 3.08706 11.93 3.05372C11.8967 3.02038 11.8516 3.00153 11.8045 3.00128ZM19.3506 6.74843H18.4154C18.3682 6.74851 18.3229 6.76729 18.2896 6.80066C18.2562 6.83403 18.2374 6.87926 18.2373 6.92645V7.5172C17.6712 7.03692 16.8957 6.70776 16.087 6.70776C14.307 6.70776 12.8639 8.11659 12.8639 9.85105C12.8639 11.5855 14.307 12.9947 16.087 12.9947C16.8743 12.9882 17.6348 12.7074 18.2373 12.2006V12.8195C18.2372 12.843 18.2417 12.8663 18.2506 12.888C18.2595 12.9097 18.2726 12.9295 18.2891 12.9461C18.3057 12.9628 18.3253 12.976 18.347 12.9851C18.3686 12.9941 18.3919 12.9988 18.4154 12.9988H19.3522C19.3994 12.9987 19.4446 12.98 19.478 12.9466C19.5114 12.9132 19.5302 12.868 19.5303 12.8208V6.92933C19.5306 6.90559 19.5262 6.88202 19.5173 6.86C19.5084 6.83798 19.4952 6.81796 19.4785 6.80111C19.4618 6.78426 19.4418 6.77092 19.4199 6.76187C19.3979 6.75283 19.3744 6.74825 19.3506 6.74843ZM16.1455 11.8375C14.9929 11.8375 14.0586 10.9493 14.0586 9.85425C14.0586 8.75921 14.9929 7.87133 16.1455 7.87133C17.2982 7.87133 18.2329 8.75921 18.2329 9.85425C18.2329 10.9493 17.2982 11.8375 16.1455 11.8375ZM23.7506 12.02C23.7618 11.9746 23.7547 11.9266 23.7307 11.8865C23.7067 11.8464 23.6678 11.8174 23.6225 11.8058L23.2034 11.7005L23.1918 11.6976C22.5499 11.5653 22.3174 11.354 22.287 10.769V3.17897C22.2866 3.13204 22.2677 3.08715 22.2344 3.05414C22.201 3.02114 22.1559 3.0027 22.109 3.00287H21.2445C21.1975 3.0027 21.1524 3.02114 21.1191 3.05414C21.0857 3.08715 21.0668 3.13204 21.0664 3.17897V10.4472C21.0082 12.1513 21.9818 12.6863 22.8857 12.8864L23.3174 12.9947C23.363 13.0061 23.4113 12.999 23.4517 12.975C23.4922 12.951 23.5216 12.9121 23.5335 12.8666L23.6318 12.4888C23.6348 12.4786 23.6374 12.4681 23.6399 12.4576L23.6427 12.4465L23.7506 12.02ZM26.9708 11.8864C26.9948 11.9266 27.0019 11.9746 26.9905 12.02L26.8826 12.4465C26.8794 12.4606 26.8759 12.475 26.8718 12.4888L26.7738 12.8666C26.7618 12.9121 26.7324 12.9511 26.6918 12.975C26.6513 12.999 26.603 13.0061 26.5573 12.9947L26.1257 12.8864C25.2218 12.6863 24.2485 12.1513 24.3064 10.4472V3.17897C24.3067 3.13204 24.3257 3.08715 24.359 3.05414C24.3924 3.02114 24.4375 3.0027 24.4844 3.00287H25.3489C25.3959 3.0027 25.441 3.02114 25.4743 3.05414C25.5077 3.08715 25.5266 3.13204 25.527 3.17897V10.769C25.5574 11.354 25.7914 11.5653 26.4318 11.6976C26.436 11.6982 26.4395 11.7005 26.4437 11.7005L26.8625 11.8058C26.9078 11.8173 26.9468 11.8463 26.9708 11.8864Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                    <h1 className='text-lg font-normal'>{productData.data.name}</h1>
                  </div>
                  <div className='mt-4 flex items-center justify-start space-x-4 text-sm font-normal capitalize'>
                    <div className='flex items-center space-x-1'>
                      <span className='border-b-[1px] border-b-main text-main'>
                        {productData.data.rating.toFixed(1)}
                      </span>
                      <ProductRating
                        ratingScore={productData.data.rating}
                        classNameStar='h-5 w-5'
                        primaryColor='#d0011b'
                      />
                    </div>
                    <div className='mx-4 h-[20px] w-[1px] border'></div>
                    <div className='flex items-center space-x-1'>
                      <span className='border-b-[1px] border-b-black '>
                        {formatNumberToSocialStyle(productData.data.view, true)}
                      </span>
                      <div className='text-[#767676]'>Đánh giá</div>
                    </div>
                    <div className='mx-4 h-[20px] w-[1px] border'></div>
                    <div className='flex items-center space-x-1'>
                      <span className='border-b-[1px] border-b-black '>
                        {formatNumberToSocialStyle(productData.data.sold, true)}
                      </span>
                      <div className='text-[#767676]'>Đã bán</div>
                    </div>
                  </div>
                  <div className='mt-4 flex items-center justify-start space-x-4 bg-[#FAFAFA] px-4 py-5'>
                    <div className='text-xl text-textMall line-through'>
                      ₫{formatNumberToSocialStyle(productData.data.price_before_discount, false)}
                    </div>
                    <div className='text-3xl text-main'>
                      ₫{formatNumberToSocialStyle(productData.data.price, false)}
                    </div>
                    <div className='rounded-sm bg-main p-1 text-xs font-bold uppercase text-white'>
                      {countPercentageDiscount(productData.data.price, productData.data.price_before_discount)}% giảm
                    </div>
                  </div>
                  <div className='mt-4 p-3 text-sm'>
                    <div className='grid grid-cols-12 items-center '>
                      <div className='col-span-2 text-[#767676]'>Vận chuyển</div>
                      <div className='col-span-4 flex items-center space-x-3'>
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
                            d='M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
                          />
                        </svg>
                        <span className='capitalize text-[#767676]'>Vận chuyển tới</span>
                      </div>
                      <div className='col-span-6 font-normal capitalize'>
                        <span>Xã quảng tiến, huyện trảng bom</span>
                      </div>
                    </div>
                    <div className='mt-8 grid grid-cols-12 items-center'>
                      <div className='col-span-2 text-[#767676]'>Số lượng</div>
                      <div className='col-span-10 flex items-center'>
                        <button className='flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
                          </svg>
                        </button>
                        <InputNumber
                          value={1}
                          className=''
                          classNameError='hidden'
                          classNameInput='h-8 outline-none border-t border-b border-gray-300 w-11 text-center'
                        />
                        <button className='mr-6 flex h-8 w-8 items-center justify-center rounded-r-sm border border-gray-300'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='h-4 w-4'
                          >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                          </svg>
                        </button>
                        <span className='text-textMall'>10090 sản phẩm có sẵn </span>
                      </div>
                    </div>
                    <div className='mt-14 flex items-center justify-start gap-3'>
                      <button className='flex h-12 w-fit items-center justify-center space-x-2 rounded-sm border  border-main bg-red-50 px-5 py-4'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1}
                          stroke='#D0011B'
                          className='h-6 w-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                          />
                        </svg>
                        <div className='text-main'>Thêm vào giỏ hàng</div>
                      </button>
                      <button className='flex h-12 w-fit items-center justify-center space-x-2 rounded-sm bg-main px-9 py-4 hover:bg-main/80 '>
                        <div className='text-white'>Mua ngay</div>
                      </button>
                    </div>
                  </div>
                  <div className='mt-7 h-[1px] w-full border-b border-gray-200'></div>
                  <div className='flex  items-center justify-start p-3'>
                    <img
                      className='mr-2 h-5 w-5'
                      src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/83e10a1f95cb083579c089448ef8dd3b.png'
                      alt=''
                    />
                    <div className='mr-6 text-xs'>Shopee đảm bảo</div>
                    <div className='text-xs capitalize text-textInSort'>3 ngày trả hàng / hoàn tiền</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container mt-4'>
            <div className='bg-white p-5 shadow-sm'>
              <div className='bg-mall p-3 uppercase'>Mô tả sản phẩm</div>
              <div
                className='m-4 text-sm leading-loose'
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(productData.data.description)
                }}
              />
            </div>
          </div>
        </div>

        <Transition appear show={isOpenSlideImageModal} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeSlideImageModal}>
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
                  <Dialog.Panel className='w-full max-w-6xl transform  rounded bg-white p-2  transition-all'>
                    <div className='grid grid-cols-12'>
                      <div className='col-span-8'>
                        <div className='relative w-full pt-[100%]'>
                          <img
                            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
                            alt={productData.data.name}
                          />
                          <button className='absolute left-0 top-1/2 z-10 flex h-16 w-9 -translate-y-1/2 items-center justify-center bg-black/20'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={2.5}
                              stroke='white'
                              className='h-9 w-9'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                            </svg>
                          </button>
                          <button className='absolute right-0 top-1/2 z-10 flex h-16 w-9 -translate-y-1/2 items-center justify-center bg-black/20'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={2.5}
                              stroke='white'
                              className='h-9 w-9'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className='col-span-4'></div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </Fragment>
    )
  )
}
