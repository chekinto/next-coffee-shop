import { useReducer } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { useAppContext } from '../../src/context'
import { SINGLE_PRODUCT } from '../../src/queries'
import { formatPrice } from '../../src/utils'

export default function SingleProduct() {
  const router = useRouter()
  const { slug } = router.query
  const { addToBasket } = useAppContext()

  const { data, loading, error } = useQuery(SINGLE_PRODUCT, {
    variables: { slug }
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...{error.message}</h1>

  return (
    <>
      <section className="product container">
        <button className="btn" onClick={() => router.back()}>Back</button>

        <div className="product__content">
          <div className="product__image">
            <span className="favourite__icon">
              <Image
                src="/icons/icon-heart-outline.svg"
                alt="heart filled"
                width={24}
                height={24}
                onClick={() => console.log('clicked')}
              />
            </span>

            <img src={data?.product?.image[0].url} alt={data?.product?.title} />
          </div>

          <div className="product__details">
            <h1>{data?.product?.title}</h1>
            <p>{data?.product?.descriptionLong}</p>

            <hr />

            <div className="product__cta">
              <span className="product__price">{formatPrice(data?.product?.price[0])}</span>
              <button className="btn" onClick={() => addToBasket(data)}>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}