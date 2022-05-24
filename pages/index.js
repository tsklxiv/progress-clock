import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Progress Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Progress Clock
        </h1>

        <p className="description">
          The time as progress bars.
          Influenced by <a href="https://neal.fun/progress/">neal.fun/progress</a>
        </p>
      </main>
    </div>
  )
}
