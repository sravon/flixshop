import Head from 'next/head'

export default function Seotag({title}) {
  return (
    <div>
        <Head>
            <title>Halo 1.0 || {title}</title>
            <meta name="description" content="This is halo -1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </div>
  )
}
