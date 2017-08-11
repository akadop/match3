import { CLOSE_DRIVER_PANEL, OPEN_DRIVER_PANEL, SELECT_DRIVER } from '../types'

export const selectDriver = ({ selectedDriver }) => ({
  // payload containing the character ID we want specific information on
  type: SELECT_DRIVER,
  payload: { selectedDriver }
})

export const openDriverPanel = () => ({
  // toggle the panel that displays driver information upon selecting a driver
  type: OPEN_DRIVER_PANEL
})

export const closeDriverPanel = () => ({
  // close the driver panel
  type: CLOSE_DRIVER_PANEL
})
