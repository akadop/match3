import { CLOSE_DRIVER_PANEL, SELECT_DRIVER } from '../types'

export const initialState = {
  selectedDriver: '',
  driverPanelIsOpen: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_DRIVER:
      return {
        ...state,
        // this is the ID we query specifically for with graphql
        selectedDriver: payload.selectedDriver,
        driverPanelIsOpen: true
      }

    case CLOSE_DRIVER_PANEL:
      return {
        ...state,
        selectedDriver: '',
        driverPanelIsOpen: false
      }

    default:
      return state
  }
}
