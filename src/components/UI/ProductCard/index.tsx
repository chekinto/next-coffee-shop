import { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAppContext } from '../../../context'
import { ProductProps } from '../../../types'

export const ProductCard: FunctionComponent<ProductProps> = ({ id, title, description, category, image, slug, isPopular, price, quantity }) => {
  const { addToBasket } = useAppContext()

  return (
    <article className="card">
      {isPopular && <span className="card-popular">Popular</span>}

      <Link href={`/${category}/${slug}`}>
        <div className="card__image">
          <span className="favourite__icon">
            <Image
              src="/icons/icon-heart-outline.svg"
              alt="heart filled"
              width={24}
              height={24}
              onClick={() => console.log('clicked')}
            />
          </span>

          <div className="card__pill">
            <span className={`capitalize ${category}`}>{category}</span>
          </div>

          <img
            src={image[0]?.url}
            alt={title}
          />
        </div>

      </Link>
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
      <button className="btn" onClick={() => addToBasket({ id, title, description, image, price, quantity })}>Add to basket</button>
    </article>
  )
}