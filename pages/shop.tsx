import { useEffect, useState } from 'react'
import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import { ALL_PRODUCTS } from '../src/queries'
import { GridList } from '../src/components'
import { client } from '../src/lib/apollo'

export default function Shop() {
  const { data, loading, error } = useQuery(ALL_PRODUCTS)
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...{error.message}</h1>

  async function fetchCategory(category) {
    console.log(category)
  }

  return (
    <>
      <Head>
        <title>Shop | Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        <div className="shop__options">
          <p>
            <strong>{data.products.length}</strong> {data.products.length === 1 ? 'product' : 'products'} found
          </p>

          <input type="search" name="" id="" />

          <div className="shop__categories">
            <span onClick={() => fetchCategory('think')}>Think</span>
            <span onClick={() => fetchCategory('defend')}>Defend</span>
            <span onClick={() => fetchCategory('chill')}>Chill</span>
          </div>

        </div>

        <GridList list={data?.products} />
      </section>
    </>
  )
}
