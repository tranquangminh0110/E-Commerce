import { CommonResponseAPI } from './CommonResponse.type'
import { User } from './User.type'

export type AuthUserResponse = CommonResponseAPI<{
  access_token: string
  expires: number
  refresh_token: string
  expires_refresh_token: number
  user: User
}>
