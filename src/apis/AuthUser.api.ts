import { Endpoints } from 'src/constants/Endpoints'
import { AuthUserResponse } from 'src/types/AuthUser.type'
import http from 'src/utils/HttpClient'

const authUserApi = {
  registerAccount: (body: { email: string; password: string }) => {
    return http.post<AuthUserResponse>(Endpoints.register, body)
  }
}

export default authUserApi
