type Roles = 'Admin' | 'User'

export interface User {
  _id: string
  roles: Roles[]
  email: string
  name: string
  date_of_birth: null
  address: string
  phone: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface AuthenticatedUser {
  access_token: string
  expires: number
  refresh_token: string
  expires_refresh_token: number
  user: User
}
