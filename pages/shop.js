import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { ALL_PRODUCTS } from '../src/queries'
import { GridList } from '../src/components'

export default function Shop() {
  const { data, loading, error } = useQuery(ALL_PRODUCTS)
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...{error.message}</h1>
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        <div className="shop__options">
          <input type="search" name="" id="" />

          <div className="shop__categories">
            <span>Think</span>
            <span>Defend</span>
            <span>Chill</span>
          </div>

        </div>

        <GridList list={data.products} />
      </section>
    </>
  )
}
