import { useReducer } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { useAppContext } from '../../src/context'
import { SINGLE_PRODUCT } from '../../src/queries'
import { formatPrice } from '../../src/utils'

export default function SingleProduct() {
  const router = useRouter()
  const { slug } = router.query
  const { user, basketReducer } = useAppContext()
  const [_, dispatch] = useReducer(basketReducer, user)

  const { data, loading, error } = useQuery(SINGLE_PRODUCT, {
    variables: { slug }
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...{error.message}</h1>

  function addToBasket(data) {
    const { product: { id, title, description, image, price } } = data

    const payload = {
      id,
      title,
      description,
      image: image[0].url,
      image: price[0]
    }

    dispatch({ type: 'ADD_TO_BASKET', payload })
  }

  return (
    <>
      <section className="product container">
        <div className="product__content">
          <div className="product__image">
            <img src={data?.product?.image[0].url} alt={data?.product?.title} />
          </div>

          <div className="product__details">
            <h1>{data?.product?.title}</h1>
            <p>{data?.product?.descriptionLong}</p>

            <hr />

            <div className="product__cta">
              <span className="product__price">{formatPrice(data?.product?.price[0])}</span>
              <button onClick={() => addToBasket(data)}>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}