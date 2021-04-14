import Head from 'next/head'
import Link from 'next/link'
import { useAppContext } from '../src/context'

export default function Basket() {
  const { state } = useAppContext();

  function EmptyBasket() {
    return (
      <>
        <h1>Sorry basket is empty</h1>
        <Link href="/shop">
          <button>Shop products</button>
        </Link>
      </>
    )
  }

  function FullBasket() {
    return (
      <>
        {state.basket.map(product => (
          <p>{product.title}</p>
        ))}
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Basket | Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        {state.basket.length < 1 ? <EmptyBasket /> : <FullBasket />}
      </section>
    </>
  )
}
