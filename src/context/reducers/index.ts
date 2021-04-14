export const user = {
  name: '',
  email: '',
  basket: [],
  saved: []
}

export const basketReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      return {
        ...state,
        basket: [...state.basket, action.payload]
      }
    }
    // case 'REMOVE_TO_BASKET': {
    //   const itemToRemove = state.basket.filter(item => item.id !==  item.payload);
    //   return {
    //     ...state,
    //     basket: [...state.basket, action.payload]
    //   }
    // }
    default:
      return state
  }
}