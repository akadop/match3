import { SELECT_DRIVER, TOGGLE_DRIVER_PANEL } from '../types'

export const selectDriver = ({ selectedDriver }) => ({
  // payload containing the character ID we want specific information on
  type: SELECT_DRIVER,
  payload: { selectedDriver }
})

export const openDriverPanel = () => ({
  // toggle the panel that displays driver information upon selecting a driver
  type: TOGGLE_DRIVER_PANEL
})
