import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { ALL_PRODUCTS } from '../src/queries'
import { GridList } from '../src/components'

export default function Shop() {
  const { data, loading, error } = useQuery(ALL_PRODUCTS)
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...{error.message}</h1>

  console.log('data :>> ', data);

  return (
    <>
      <Head>
        <title>Shop | Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        <div className="shop__options">
          <p className="found__products">
            <strong>{data.products.length}</strong> {data.products.length === 1 ? 'product' : 'products'} found
          </p>

          <input className="search__bar" type="search" name="" id="" />

          <div className="category__links">
            <Link href="/think/all">
              <a>Think</a>
            </Link>
            <Link href="/chill/all">
              <a>Chill</a>
            </Link>
            <Link href="/defend/all">
              <a>Defend</a>
            </Link>
          </div>
        </div>

        <GridList list={data?.products} />
      </section>
    </>
  )
}
