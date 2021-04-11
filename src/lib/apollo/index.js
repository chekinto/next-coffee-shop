import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cknd4zfr3rerk01xwbae91pxr/master',
  cache: new InMemoryCache()
})

