import { FunctionComponent } from 'react'
import Link from 'next/link'

interface CardProps {
  title: string;
  description: string;
  category: string;
  image: {
    url: string;
  }
  slug: string;
}

export const Card: FunctionComponent<CardProps> = ({ title, description, category, image = [], slug }) => {
  return (
    <article className="card">
      <Link href={`/${category}/${slug}`}>
        <div className="card__image">
          <div className="card__pill">
            <span className={`capitalize ${category}`}>{category}</span>
          </div>
          <img
            src={image[0].url}
            alt={title}
          />
        </div>
      </Link>
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
      <button>Add to basket</button>
    </article>
  )
}