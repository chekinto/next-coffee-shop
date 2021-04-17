import { UserProps } from "../../types"

// NEED TO FIND SOLUTION FOR ACTION TYPE: ANY
export const basketReducer = (state: UserProps, action: any) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      return {
        ...state,
        basket: [...state.basket, action.payload]
      }
    }
    case 'REMOVE_FROM_BASKET': {
      return {
        ...state,
        basket: [...state.basket, action.payload]
      }
    }
    case 'INCREMENT_QUANTITY': {
      return {
        ...state,
      }
    }
    case 'DECREMENT_QUANTITY': {
      return {
        ...state,
      }
    }
    default:
      // return state
      throw new Error();
  }
}

export const favouritesReducer = (state: UserProps, action: any) => {
  switch (action.type) {
    case 'ADD_FAVOURITE': {
      return {
        ...state,
        saved: [...state.saved, action.payload]
      }
    }
    case 'REMOVE_FAVOURITE': {
      return {
        ...state,
        saved: [...state.saved, action.payload]
      }
    }
    default:
      // return state
      throw new Error()
  }
}