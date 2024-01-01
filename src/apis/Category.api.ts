import { ResourcePath } from 'src/constants/ResourcePath'
import { Category } from 'src/types/Category.type'
import { SuccessResponseAPI } from 'src/types/CommonResponse.type'
import http from 'src/utils/HttpClient'

const categoryApi = {
  getCategories: () => {
    return http.get<SuccessResponseAPI<Category>>(ResourcePath.categories)
  }
}

export default categoryApi
