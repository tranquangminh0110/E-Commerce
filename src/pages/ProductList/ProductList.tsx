import { useGetProductList } from 'src/services/queries/Product.queries'
import AsideFilter from './components/AsideFilter'
import Product from './components/Product'
import SortProductList from './components/SortProductList'
import Pagination from './components/Pagination'
import { ProductListQueryParamsConfig } from 'src/types/Product.type'
import { Fragment, useEffect } from 'react'
import { useGetCategories } from 'src/services/queries/Category.queries'
import { createSearchParams, useNavigate } from 'react-router-dom'
import Path from 'src/constants/Path'
import useQueryConfig from 'src/hooks/useQueryConfig'

export type QueryParamsConfig = {
  [key in keyof ProductListQueryParamsConfig]: string
}

export default function ProductList() {
  const navigate = useNavigate()

  const queryParamsConfig = useQueryConfig()

  const getCategoriesQuery = useGetCategories()
  const getProductListQuery = useGetProductList(queryParamsConfig as ProductListQueryParamsConfig)

  useEffect(() => {
    if (getProductListQuery.data?.data.data.products.length === 0) {
      navigate({
        pathname: Path.home,
        search: createSearchParams({
          ...queryParamsConfig,
          page: '1',
          limit: '4'
        }).toString()
      })
    }
  }, [getProductListQuery.data?.data.data.products, navigate, queryParamsConfig])

  return (
    <div className='bg-mall py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-2'>
            <AsideFilter categories={getCategoriesQuery.data?.data.data || []} />
          </div>
          <div className='col-span-10'>
            {getProductListQuery.data && (
              <Fragment>
                <SortProductList
                  queryParamsConfig={queryParamsConfig}
                  pageSize={getProductListQuery.data.data.data.pagination.page_size}
                />

                <div className='mt-2 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                  {getProductListQuery.data.data.data.products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
                </div>
                <Pagination pageSize={getProductListQuery.data.data.data.pagination.page_size} />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
