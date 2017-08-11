import { SELECT_DRIVER, TOGGLE_DRIVER_PANEL } from '../types'

export const initialState = {
  selectedDriver: '',
  driverPanelIsOpen: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_DRIVER:
      return {
        ...state,
        selectedDriver: payload.selectedDriver // this is the ID we query specifically for with graphql
      }

    case TOGGLE_DRIVER_PANEL:
      return {
        ...state,
        driverPanelIsOpen: true
      }

    default:
      return state
  }
}
