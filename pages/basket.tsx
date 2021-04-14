import Head from 'next/head'
import { useAppContext } from '../src/context'

export default function Basket() {
  const { state } = useAppContext();

  return (
    <>
      <Head>
        <title>Basket | Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container">
        {state.basket.map(item => (
          <p>{item.title}</p>
        ))}
      </section>
    </>
  )
}
