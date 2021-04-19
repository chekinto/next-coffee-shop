import Head from 'next/head'
import Link from 'next/link'
import { CartItem } from '../src/components';
import { useAppContext } from '../src/context'
import { formatPrice } from '../src/utils'

export default function Basket() {
  const { state } = useAppContext();

  console.log(`state`, state)

  const EmptyBasket = () => {
    return (
      <>
        <h1>Sorry basket is empty</h1>
        <Link href="/shop">
          <button className="btn">Shop products</button>
        </Link>
      </>
    )
  }

  const FullBasket = () => {
    return (
      <>
        {state.basket.map(product => {
          console.log('product :>> ', product);
          return (
            <CartItem key={product.id} {...product} />
          )
        })}
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
