import { compose, graphql } from 'react-apollo'

import SelectDriverList from '../components/SelectDriverList'
import allDrivers from '../lib/graphql/queryAllDrivers'
import { connect } from 'react-redux'
import mapActions from '../lib/redux/mapActions'
import { selectDriver } from '../lib/redux/actions'

export const mapStateToProps = ({
  reducers: { selectedDriver, driverPanelIsOpen }
}) => ({
  selectedDriver,
  driverPanelIsOpen
})

// map the actions defined in the redux/actions folder to the action props in our component

export const mapDispatchToProps = mapActions({
  selectDriver
})

// combine redux actions, state, and graphql data --> export as container, or smart component

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(allDrivers, {
    options: { fetchPolicy: 'cache-and-network' }
  })
)

export default container(SelectDriverList)
