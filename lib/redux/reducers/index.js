import { CLOSE_DRIVER_PANEL, OPEN_DRIVER_PANEL, SELECT_DRIVER } from '../types'

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
        selectedDriver: payload.selectedDriver
      }

    case OPEN_DRIVER_PANEL:
      return {
        ...state,
        driverPanelIsOpen: true
      }

    case CLOSE_DRIVER_PANEL:
      return {
        ...state,
        driverPanelIsOpen: false
      }

    default:
      return state
  }
}
