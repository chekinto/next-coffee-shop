import { ApolloProvider } from '@apollo/client'
import { Layout } from '../src/components/Layout'
import { client } from '../src/lib/apollo'
import '../src/styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
