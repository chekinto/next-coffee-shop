import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-8">
          <div>
            breadcrumb
          </div>

          <div>
            Sort options
          </div>
        </div>
      </div>
    </>
  )
}
