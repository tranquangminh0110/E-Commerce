import { omitBy, isUndefined } from 'lodash'
import { QueryParamsConfig } from 'src/pages/ProductList/ProductList'
import { useQueryParams } from './useQueryParams'

const useQueryConfig = () => {
  const queryParams: QueryParamsConfig = useQueryParams()

  const queryParamsConfig: QueryParamsConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '10',
      sort_by: queryParams.sort_by,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  return queryParamsConfig
}

export default useQueryConfig
