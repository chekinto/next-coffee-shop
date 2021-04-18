import Head from 'next/head'
import { useQuery } from "@apollo/client";
import { GridList, Hero } from '../src/components'
import { LATEST_ARRIVALS } from '../src/queries'
import { ProductProps } from '../src/types'

export default function Home() {
  const { data, loading, error } = useQuery<ProductProps[]>(LATEST_ARRIVALS)
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...</h1>

  console.log('home page data', data)

  return (
    <>
      <Head>
        <title>Coffee store | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <section className="latest-arrivals container">
        <h2>Latest arrivals</h2>
        <GridList list={data?.products} />
      </section>
    </>
  )
}