import Link from 'next/link'
import { Button } from '../../../components'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>Coffee Store</h1>
        <p>The best coffee around the town</p>
        <Link href="/shop">
          <a>
            <Button>Shop Now</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}
