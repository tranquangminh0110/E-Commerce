import { Link } from 'react-router-dom'
import ProductRating from 'src/components/RatingStar'
import { Product as TProduct } from 'src/types/Product.type'
import { formatNumberToSocialStyle } from 'src/utils/Utils'
interface Props {
  product: TProduct
}

const cityArray: string[] = ['TP. Hồ Chí Minh', 'Đà Nẵng', 'Hà Nội', 'Huế', 'Đồng Nai', 'Lạng Sơn', 'Bình Dương']
export default function Product({ product }: Props) {
  return (
    <Link to='#'>
      <div className='relative overflow-hidden rounded-sm bg-white shadow-sm transition-transform duration-100 hover:translate-y-[-0.1rem] hover:shadow'>
        <img className='absolute left-0 top-[-2px] z-50 h-8 w-8' src='/src/assets/tag-mall-final.png' alt='' />
        <div className='relative w-full pt-[100%]'>
          <img
            className='absolute left-0 top-0 h-full w-full bg-white object-cover'
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className='overflow-hidden p-2 text-xs'>
          <div className='line-clamp-2 min-h-[2rem]'>{product.name}</div>
          <div className='mt-3 flex items-center justify-start space-x-1'>
            <div className='flex text-sm text-footerText line-through'>
              <div>₫</div>
              <div>{formatNumberToSocialStyle(product.price_before_discount)}</div>
            </div>
            <div className='flex text-base text-main'>
              <div>₫</div>
              <div>{formatNumberToSocialStyle(product.price)}</div>
            </div>
          </div>
          <div className='my-3 flex items-center justify-start gap-3 text-xs'>
            <ProductRating ratingScore={product.rating} />
            <div>Đã bán {formatNumberToSocialStyle(product.sold, true)}</div>
          </div>
          <div className='text-[#000000A6]'>{cityArray[Math.floor(Math.random() * cityArray.length)]}</div>
        </div>
      </div>
    </Link>
  )
}
