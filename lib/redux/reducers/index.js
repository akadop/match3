import { SELECT_DRIVER } from '../types'

export const initialState = {
  selectedDriver: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_DRIVER:
      return {
        ...state,
        selectedDriver: payload.selectedDriver // this is the ID we query specifically for with graphql
      }

    default:
      return state
  }
}
