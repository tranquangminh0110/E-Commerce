import { useGetProductList } from 'src/services/queries/Product.queries'
import AsideFilter from './components/AsideFilter'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import { useQueryParams } from 'src/hooks/useQueryParams'

export default function ProductList() {
  const queryParams = useQueryParams()
  const getProductListQuery = useGetProductList(queryParams)

  return (
    <div className='bg-mall py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-2'>
            <AsideFilter />
          </div>
          <div className='col-span-10'>
            <SortProductList />
            <div className='mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {getProductListQuery.data &&
                getProductListQuery.data.data.data.products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
