import Head from 'next/head'
import {useEffect, useState} from 'react'

export default function Home() {
  const [time, setTime] = useState(new Date())

  // https://stackoverflow.com/a/59861536
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  })

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
          Influenced by <a href="https://neal.fun/progress/">neal.fun/progress</a>.
        </p>

        <div className="progress-info">
          <span className="progress-title">Next minute</span>
          <span className="progress-left">{60 - time.getSeconds()} seconds left</span>
        </div>
        <progress className="second" value={time.getSeconds()} max="60"/>
      </main>
    </div>
  )
}
