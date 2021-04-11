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

      <div>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <span>{router.pathname}</span>
        </div>

      </div>


      <div>Favourites</div>
    </>
  )
}
