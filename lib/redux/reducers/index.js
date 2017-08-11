import { SELECT_DRIVER } from '../types'

export const initialState = {
  selectedDriver: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_DRIVER:
      return {
        ...state,
        selectedDriver: payload.selectedDriver
      }

    default:
      return state
  }
}
