import { User } from 'src/types/User.type'

const interactLocalStorage = {
  setAccessToken: (access_token: string) => {
    localStorage.setItem('access_token', access_token)
  },
  getAccessToken: () => {
    return localStorage.getItem('access_token') || ''
  },
  removeAccessToken: () => {
    localStorage.removeItem('access_token')
  },
  getProfileUser: () => {
    const userObj = localStorage.getItem('user_profile')
    return userObj ? JSON.parse(userObj) : null
  },
  setProfileUser: (user: User) => {
    localStorage.setItem('user_profile', JSON.stringify(user))
  },
  removeAllData: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_profile')
  }
}

export default interactLocalStorage
