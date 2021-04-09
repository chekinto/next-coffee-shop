import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Favourites() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <Link href="/">
            <a className="text-yellow-500">Home</a>
          </Link>
          <span className="opacity-25">{router.pathname}</span>
        </div>

      </div>


      <div className="container mx-auto">Favourites</div>
    </>
  )
}
