import { FunctionComponent } from 'react'
import { createContext, useContext } from 'react'
import { user, basketReducer } from './reducers'
import { UserProps } from '../types'

interface AppContextProps {
  children: React.ReactNode;
}

const AppContext = createContext<Partial<UserProps>>({})

export const AppContextProvider: FunctionComponent<AppContextProps> = ({ children }) => {
  return (
    <AppContext.Provider value={{ user, basketReducer }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)