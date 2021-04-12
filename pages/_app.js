import { ApolloProvider } from '@apollo/client'
import { client } from '../src/lib/apollo'
import { AppContextProvider } from '../src/context'
import { Layout } from '../src/components/Layout'
import '../src/styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
