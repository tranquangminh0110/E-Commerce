import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import authUserApi from 'src/apis/AuthUser.api'
import { AppContext } from 'src/contexts/App.context'

export const useRegisterAccount = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => authUserApi.registerAccount(body)
  })
}

export const useLoginAccount = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) => authUserApi.loginAccount(body)
  })
}

export const useLogoutAccount = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  return useMutation({
    mutationFn: authUserApi.logoutAccount,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })
}
