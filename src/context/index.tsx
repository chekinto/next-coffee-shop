import { Dispatch, FunctionComponent } from 'react'
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
  state: UserProps,
  addToBasket: (ProductProps) => void;
  children: React.ReactNode;
}

const AppContext = createContext<AppContextProps | null>(null)

export const AppContextProvider: FunctionComponent<AppContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, user)

  function addToBasket(data) {
    const { product: { id, title, description, image, price } } = data;
    const payload = {
      id,
      title,
      description,
      image: image[0].url,
      price: price[0]
    }
    dispatch({ type: 'ADD_TO_BASKET', payload })
    console.log('payload :>> ', payload);
  }

  return (
    <AppContext.Provider value={{
      state,
      addToBasket
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)