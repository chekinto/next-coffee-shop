import { FunctionComponent } from 'react'
import { createContext, useContext, useReducer } from 'react'
import { basketReducer } from './reducers'
import { UserProps, ProductProps } from '../types'

const user = {
  name: '',
  email: '',
  basket: [],
  saved: []
}

interface AppContextProps {
  state: UserProps;
  dispatch: (state: UserProps, action: any) => void;
  addToBasket: (ProductProps) => void;
  children: React.ReactNode;
}

const AppContext = createContext<AppContextProps | null>(null)

export const AppContextProvider: FunctionComponent<AppContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, user)

  function addToBasket(data) {
    dispatch({ type: 'ADD_TO_BASKET', payload: data })
  }

  return (
    <AppContext.Provider value={{
      state,
      dispatch,
      addToBasket
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)