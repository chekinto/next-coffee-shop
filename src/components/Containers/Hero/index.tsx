import Link from 'next/link'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>Coffee Store</h1>
        <p>The best coffee around the town</p>
        <Link href="/shop">
          <a>
            <button className="btn">Shop Now</button>
          </a>
        </Link>
      </div>
    </div>
  )
}
