import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { AdvertBanner, CategoryBanner, GridList } from '../../src/components'
import { GET_CATEGORY } from '../../src/queries'

export default function CategoryAll() {
  const router = useRouter()
  const { data, loading, error } = useQuery(GET_CATEGORY, {
    variables: { category: router.query.category }
  })

  if (loading) return <h1>Loader...</h1>
  if (error) return <h1>Error {error.message}</h1>

  function checkPath(path: string) {
    if (path === router.asPath) return true;
    return null
  }

  return (
    <>
      <CategoryBanner />
      <div className="container">
        <div className="category">
          <h1 className="capitalize">{router.query.category}</h1>
          <div className="category__links">
            <Link href={`/think/all`}>
              <a className={checkPath(`/think/all`) ? 'category--active' : ''}>Think</a>
            </Link>
            <Link href={`/chill/all`}>
              <a className={checkPath(`/chill/all`) ? 'category--active' : ''}>Chill</a>
            </Link>
            <Link href={`/defend/all`}>
              <a className={checkPath(`/defend/all`) ? 'category--active' : ''}>Defend</a>
            </Link>
          </div>
        </div>
        <GridList list={data?.products} />
      </div>

      <AdvertBanner />
    </>
  )
}
