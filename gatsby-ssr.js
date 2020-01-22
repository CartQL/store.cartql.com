import "isomorphic-fetch"

import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"

import Layout from "./src/components/Layout"

const client = new ApolloClient({
  uri: process.env.GATSBY_GRAPHQL_ENDPOINT,
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <Layout>{element}</Layout>
  </ApolloProvider>
)
