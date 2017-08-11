import { openDriverPanel, selectDriver } from '../lib/redux/actions'

import SelectDriverList from '../components/SelectDriverList'
import allDrivers from '../lib/graphql/queryAllDrivers'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import mapActions from '../lib/redux/mapActions'

export const mapStateToProps = ({
  reducers: { selectedDriver, driverPanelIsOpen }
}) => ({
  selectedDriver,
  driverPanelIsOpen
})

// map the actions defined in the redux/actions folder to the action props in our component

export const mapDispatchToProps = mapActions({
  selectDriver,
  openDriverPanel
})

// combine redux actions, state, and graphql data --> export as container, or smart component

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(allDrivers, {
    options: { fetchPolicy: 'network-only' }
  })
)

export default container(SelectDriverList)
