import { FunctionComponent } from "react"

interface AdvertBannerProps {
  reverse?: boolean;
}
export const AdvertBanner: FunctionComponent<AdvertBannerProps> = ({ reverse }) => {
  return (
    <section className="advert-banner">
      <div className={`advert-banner__inner ${reverse && 'advert-banner__reverse'}`}>
        <div className="advert-banner__image">
          <img src="/images/img-coffee-chill.jpg" alt="" width="100%" height="400px" />
        </div>

        <div className="advert-banner__content">
          <p>Prepare for amazing</p>
          <h2>A Better way to power up.</h2>
          <p>
            Meet some of your new favorites: Fantastically fair-trade, crash-free coffee. Chef-worthy, immune-supporting, actually-tasty plant protein. Decadent hot chocolate that’s undeniably good for you. This stuff’s so remarkable, our thesaurus can’t keep up.
          </p>
        </div>
      </div>
    </section>
  )
}

