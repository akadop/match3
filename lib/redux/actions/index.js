import { CLOSE_DRIVER_PANEL, SELECT_DRIVER } from '../types'

export const selectDriver = ({ selectedDriver }) => ({
  // pass the driver ID as part of the payload, allowing
  // us to use that ID when we query for more specific info.
  type: SELECT_DRIVER,
  payload: { selectedDriver }
})

export const closeDriverPanel = () => ({
  // close the driver panel
  type: CLOSE_DRIVER_PANEL
})
