import Link from 'next/link'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero__inner">
        <h1>Coffee Break</h1>
        <p>The Best Coffee in Town</p>
        <Link href="/shop">
          <a>
            <button className="btn">Shop Now</button>
          </a>
        </Link>
      </div>
    </div>
  )
}
