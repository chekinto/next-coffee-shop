import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { SINGLE_PRODUCT } from '../../src/queries'
import { formatPrice } from '../../src/utils'

export default function SingleProduct() {
  const router = useRouter()
  const { slug } = router.query
  const { data: { product }, loading, error } = useQuery(SINGLE_PRODUCT, {
    variables: { slug }
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...{error.message}</h1>
  return (
    <>
      <section className="product container">
        <div className="product__content">
          <div className="product__image">
            <img src={product.image[0].url} alt={product.title} />
          </div>

          <div className="product__details">
            <h1>{product.title}</h1>
            <p>{product.descriptionLong}</p>

            <hr />

            <div className="product__cta">
              <span className="product__price">{formatPrice(product.price[0])}</span>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}