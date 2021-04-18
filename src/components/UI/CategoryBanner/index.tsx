import { FunctionComponent } from "react"
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { SINGLE_CATEGORY } from "../../../queries"
import { useRouter } from "next/router"
import { formatPrice } from "../../../utils"

interface CategoryBannerProps {
  category: string | string[];
  subheading: string | number;
  type: string;
  typeDescription: string;
}

export const CategoryBanner: FunctionComponent<CategoryBannerProps> = ({ category, subheading, type, typeDescription }) => {
  const router = useRouter()
  const { data, loading, error } = useQuery(SINGLE_CATEGORY, {
    variables: {
      category: router.query.category
    }
  })

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...{error.message}</h1>

  return (
    <section className="category-banner" style={{ backgroundImage: `url('/images/img-coffee-${category}.jpg')` }}>
      <div className="category-banner-inner container">
        <div className="category__content">
          <small className={`${category}`}>Shop / <span className="capitalize">{category}</span></small>
          <h1 className="capitalize">{category}</h1>
          <p>{subheading}</p>
        </div>

        <div className="category-start-with">
          <p className={`start-with-${category}`}>START WITH THIS</p>
          <div>
            <p>{type}</p>
            <p>{formatPrice(data.products[0].price)}</p>
          </div>

          <div>
            <p>{typeDescription}</p>
            <Link href={`/${data.products[0].category}/${data.products[0].slug}`}>
              <button className={`${category}-cta`}>Shop now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
