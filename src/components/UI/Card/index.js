import Image from 'next/image'

export const Card = ({ icon, title, subtitle }) => {
  return (
    <article className="card">
      <div className="card__icon">{icon}</div>
      <p className="card__title">{title}</p>
      <p className="card__subtitle">{subtitle}</p>
    </article>
  )
}