import Link from 'next/link'
import { Button } from '../../../components'

export const Hero = () => {
  return (
    <div className="w-full p-16">
      <h1 className="font-bold text-4xl	text-center pt-8 pb-4">Coffee Store</h1>
      <p className="text-center pb-4">The best coffee around the town</p>
      <Link href="/shop">
        <a className="block text-center">
          <Button>Shop Now</Button>
        </a>
      </Link>
    </div>
  )
}
