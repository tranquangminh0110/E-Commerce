import { useMutation } from '@tanstack/react-query'
import authUserApi from 'src/apis/AuthUser.api'

export const useRegisterAccount = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => authUserApi.registerAccount(body)
  })
}
