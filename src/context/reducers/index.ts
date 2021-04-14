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
    default:
      throw new Error();
    // return state
  }
}