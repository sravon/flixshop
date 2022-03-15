import Head from 'next/head'
import Image from 'next/image'
import Axios from '../Axios/Axios'
import Category from '../components/Category'

export default function Home({results}) {

  
  

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {results.map( result => <Category 
          key={result.id} 
          results={result}
        />
        )
      }
    </div>
  )
}

export async function getServerSideProps(){
  
  const request = await Axios(`category`);
  
  return {
    props: {
      results: request.data,
    }
  }

}
