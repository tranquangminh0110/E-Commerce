import { ResourcePath } from 'src/constants/ResourcePath'
import { SuccessResponseAPI } from 'src/types/CommonResponse.type'
import { AuthenticatedUser, User } from 'src/types/User.type'
import http from 'src/utils/HttpClient'

interface Body {
  email: string
  password: string
}

const authUserApi = {
  registerAccount: (body: Body) => {
    return http.post<SuccessResponseAPI<AuthenticatedUser>>(ResourcePath.register, body)
  },
  loginAccount: (body: Body) => {
    return http.post<SuccessResponseAPI<AuthenticatedUser>>(ResourcePath.login, body)
  },
  logoutAccount: () => {
    return http.post(ResourcePath.logout)
  },
  getDetailProfile: () => {
    return http.get<SuccessResponseAPI<User>>(ResourcePath.detailProfile)
  }
}

export default authUserApi
