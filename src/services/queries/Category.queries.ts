import { useQuery } from '@tanstack/react-query'
import categoryApi from 'src/apis/Category.api'

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: categoryApi.getCategories
  })
}
