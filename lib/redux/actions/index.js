import { SELECT_DRIVER } from '../types'

export const selectDriver = ({ selectedDriver }) => ({
  // payload containing the character ID we want specific information on
  type: SELECT_DRIVER,
  payload: { selectedDriver }
})
