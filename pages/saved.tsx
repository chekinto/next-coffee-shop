import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Saved() {
  return (
    <>
      <Head>
        <title>My Favourites | Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1>Saved Favourites</h1>
      </div>
    </>
  )
}
