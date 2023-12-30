import { createContext, useState } from 'react'
import { User } from 'src/types/User.type'
import interactLocalStorage from 'src/utils/LocalStorageInteract'

interface AppProviderInterface {
  children: React.ReactNode
}
interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  userProfile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}

export const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(interactLocalStorage.getAccessToken()),
  setIsAuthenticated: () => null,
  userProfile: interactLocalStorage.getProfileUser(),
  setProfile: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)
export default function AppProvider({ children }: AppProviderInterface) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [userProfile, setProfile] = useState<User | null>(initialAppContext.userProfile)

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, userProfile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
