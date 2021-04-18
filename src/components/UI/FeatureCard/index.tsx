import { FunctionComponent } from 'react'
import Link from 'next/link'

interface FeatureCardProps {
  image: string;
  title: string;
  subheading: string;
  path: string;
}

export const FeatureCard: FunctionComponent<FeatureCardProps> = ({ title, subheading, path, image }) => {
  return (
    <div className={`feature-card feature-card-${title}`}>
      <div className="feature-card__image">
        <img src={image} alt={`${title} - ${subheading}`} />
        <div className={`${title}-separator`}></div>
      </div>

      <div className="feature-card__content">
        <div>
          <h3 className="capitalize">{title}</h3>
          <p>{subheading}</p>
        </div>
        <Link href={path}>
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  )
}
