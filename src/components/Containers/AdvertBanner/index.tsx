import { FunctionComponent } from "react"
import Link from 'next/link'

interface AdvertBannerProps {
  image: string;
  heading: string;
  title: string;
  content: string;
  to: string;
  buttonText: string;
  reverse?: boolean;
}

export const AdvertBanner: FunctionComponent<AdvertBannerProps> = ({ image, heading, title, content, reverse, to, buttonText }) => {
  return (
    <section className="advert-banner">
      <div className={`advert-banner__inner ${reverse && 'advert-banner__reverse'}`}>
        <div className="advert-banner__image">
          <img src={image} alt="" width="100%" height="400px" />
        </div>

        <div className="advert-banner__content-wrapper">
          <p className="advert-banner__heading">{heading}</p>
          <h2 className="advert-banner__title">{title}</h2>
          <p className="advert-banner__content">{content}</p>
          <Link href={`${to}`}>
            <button className="advert-banner__button btn">{buttonText}</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
