import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { AdvertBanner, CategoryBanner, FeatureCard, GridList } from '../../../src/components'
import { GET_CATEGORY } from '../../../src/queries'
import { categoryCards } from './data'

const CategoryAll = () => {
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

  const filteredCategory = categoryCards.find(cat => cat.title === router.query.category)

  function filterByCaffeine(value: boolean) {
    console.log(value);
  }

  return (
    <>
      <CategoryBanner
        category={router.query.category}
        subheading={filteredCategory?.subheading}
        type={filteredCategory?.type}
        typeDescription={filteredCategory?.typeDescription}
      />

      <section className="container">
        <div className="category">
          {router.query.category === 'think' && (
            <div className="filter-container">
              <button onClick={() => filterByCaffeine(true)}>CAFFEINE</button>
              <button onClick={() => filterByCaffeine(false)}>CAFFEINE FREE</button>
            </div>
          )}

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
      </section>

      <AdvertBanner />

      <section className="container">
        <div className="feature-cards">
          {categoryCards.map(card => {
            return card.title !== router.query.category && (
              <FeatureCard
                image={card.img}
                title={card.title}
                subheading={card.subheading}
                path={card.path}
              />
            )
          })}
        </div>
      </section>

    </>
  )
}

export default CategoryAll
