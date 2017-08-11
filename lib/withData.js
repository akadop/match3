import { ApolloProvider, getDataFromTree } from 'react-apollo'

import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'
import initApollo from './initApollo'
import initRedux from './initRedux'

// this higher order component combines redux + apollo client, and allows us to easily wrap components to make them "smart" / data-connected

function getComponentDisplayName(Component) {
  // Gets the display name of a JSX component for dev tools
  return Component.displayName || Component.name || 'Unknown'
}

export default ComposedComponent => {
  return class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(
      ComposedComponent
    )})`
    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps(ctx) {
      let serverState = {}

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      if (!process.browser) {
        // Run all GraphQL queries in the component tree
        // and extract the resulting data

        const apollo = initApollo()
        const redux = initRedux(apollo)

        // Provide the `url` prop data in case a GraphQL query uses it
        const url = { query: ctx.query, pathname: ctx.pathname }

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            // No need to use the Redux Provider
            // because Apollo sets up the store for us
            <ApolloProvider client={apollo} store={redux}>
              <ComposedComponent url={url} {...composedInitialProps} />
            </ApolloProvider>
          )
        } catch (error) {}

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()

        // Extract query data from the store
        const state = redux.getState()

        // No need to include other initial Redux state because when it
        // initialises on the client-side it'll create it again anyway
        serverState = {
          apollo: {
            // Only include the Apollo data state
            data: state.apollo.data
          }
        }
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props)
      this.apollo = initApollo()
      this.redux = initRedux(this.apollo, this.props.serverState)
    }

    render() {
      return (
        // No need to use the Redux Provider
        // because Apollo sets up the store for us
        <ApolloProvider client={this.apollo} store={this.redux}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
