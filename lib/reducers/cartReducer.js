import * as _ from 'lodash'

export const CART_ACTIONS = {
  ADD: 'add',
  REMOVE_ALL: 'remove_all',
  REMOVE_ITEM: 'remove_item',
  REMOVE_ONE: 'remove_one'
}


export function cartReducer(state, action) {
  //klonar state utan referens
  const tempCart = _.cloneDeep(state)
  let unique = true
  switch (action.type) {
    case 'add': {
      for (const beer of tempCart.cartItems) {
        if (unique && beer.id === action.payload.id) {
          beer.quantity += 1
          unique = false
          break
        }
      }
      if (unique) {
        tempCart.cartItems.push(action.payload)
      }
      return {
        ...state,
        cartItems: tempCart.cartItems
      }
    }

    case 'remove_one': {
      for (const beer of tempCart.cartItems) {
        if (action.payload.id === beer.id) {
          beer.quantity -= 1
          if (beer.quantity > 0) {
            return {
              ...state,
              cartItems: tempCart.cartItems
            }
          }
        }
      }
    }

    /*eslint-disable-next-line no-fallthrough*/
    case 'remove_item': {
      tempCart.cartItems = tempCart.cartItems.filter((beer) => beer.id !== action.payload.id)

      return {
        ...state,
        cartItems: tempCart.cartItems
      }
    }

    case 'remove_all':
      return {
        ...state,
        cartItems: []
      }
    default:
      return { ...state }
  }
}
