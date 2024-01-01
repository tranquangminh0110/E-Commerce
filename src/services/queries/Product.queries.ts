import { useQuery } from '@tanstack/react-query'
import productApi from 'src/apis/Product.api'
import { ProductListQueryConfig } from 'src/types/Product.type'

export const useGetProductList = (queryParams: ProductListQueryConfig) => {
  return useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => productApi.getProductList(queryParams),
    staleTime: 3 * 60 * 1000
  })
}
