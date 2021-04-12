import { createContext, useContext } from 'react'
import { user, basketReducer } from './reducers'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ user, basketReducer }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)