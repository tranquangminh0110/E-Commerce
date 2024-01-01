import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { ResourcePath } from 'src/constants/ResourcePath'
import interactLocalStorage from './LocalStorageInteract'
import { SuccessResponseAPI } from 'src/types/CommonResponse.type'
import { AuthenticatedUser } from 'src/types/User.type'

export class Http {
  instance: AxiosInstance
  access_token: string
  constructor() {
    this.access_token = interactLocalStorage.getAccessToken()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token) {
          config.headers.Authorization = this.access_token
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if ([ResourcePath.login, ResourcePath.register].includes(url as 'login' | 'register')) {
          const data = response.data as SuccessResponseAPI<AuthenticatedUser>
          this.access_token = data.data.access_token
          interactLocalStorage.setAccessToken(this.access_token)
          interactLocalStorage.setProfileUser(data.data.user)
        } else if (ResourcePath.logout === url) {
          this.access_token = ''
          interactLocalStorage.removeAllData()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          /* eslint-disable @typescript-eslint/no-explicit-any */
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
