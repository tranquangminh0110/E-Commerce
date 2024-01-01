import { ResourcePath } from 'src/constants/ResourcePath'
import { SuccessResponseAPI } from 'src/types/CommonResponse.type'
import { Product, ProductList, ProductListQueryParamsConfig } from 'src/types/Product.type'
import http from 'src/utils/HttpClient'

const productApi = {
  getProductList: (queryConfig: ProductListQueryParamsConfig) => {
    return http.get<SuccessResponseAPI<ProductList>>(ResourcePath.products, {
      params: queryConfig
    })
  },
  getProduct: (productId: string) => {
    return http.get<SuccessResponseAPI<Product>>(`${ResourcePath.products}/${productId}`)
  }
}

export default productApi
