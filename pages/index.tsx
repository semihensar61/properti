import Head from 'next/head'
import { Claculator } from '../components/calculator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Roman calculator App </title>
      </Head>
      <Claculator></Claculator>
    </>
  )
}
