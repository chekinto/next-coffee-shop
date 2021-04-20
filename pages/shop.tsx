import { ChangeEvent, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useQuery, useLazyQuery } from '@apollo/client'
import { ALL_PRODUCTS, EXECUTE_SEARCH } from '../src/queries'
import { ProductProps } from '../src/types'
import { GridList } from '../src/components'

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState<ProductProps | []>([])
  const [searchText, setSearchText] = useState('')
  // Filters using search
  const [handleSearch] = useLazyQuery(EXECUTE_SEARCH, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      setFilteredProducts(data.products)
      setSearchText('')
    }
  })

  const { data, loading, error } = useQuery(ALL_PRODUCTS)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...{error.message}</h1>

  function handleChange(e) {
    setSearchText(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Shop | Coffee Break</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        <div className="shop__options">
          <p className="found__products">
            <strong>{data.products.length}</strong> {data.products.length === 1 ? 'product' : 'products'} found
          </p>

          <div>
            <input
              className="search__bar"
              type="search"
              name="search"
              id="search"
              value={searchText}
              onChange={handleChange}
            />
            <button onClick={() => handleSearch({
              variables: { query: searchText }
            })}>Search</button>
          </div>

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
