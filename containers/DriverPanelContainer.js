import { compose, graphql } from 'react-apollo'

import { DriverPanel } from '../components/DriverPanel'
import { closeDriverPanel } from '../lib/redux/actions/'
import { connect } from 'react-redux'
import mapActions from '../lib/redux/mapActions'
import queryDriver from '../lib/graphql/queryDriver'

export const mapStateToProps = ({
  reducers: { driverPanelIsOpen, selectedDriver }
}) => ({
  driverPanelIsOpen,
  selectedDriver
})

// map the actions defined in the redux/actions folder to the action props in our component

export const mapDispatchToProps = mapActions({
  closeDriverPanel
})

// combine redux actions, state, and graphql data --> export as container, or smart component

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(queryDriver, {
    options: ({ selectedDriver }) => ({
      variables: {
        driverId: selectedDriver
      },
      cache: 'cache-and-network'
    })
  })
)

export default container(DriverPanel)
