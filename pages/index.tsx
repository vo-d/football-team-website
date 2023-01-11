import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import ImgSlider from '../components/ImgSlider'
const Home: NextPage = () => {
  return (
    <div className=' bg-gray-300'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>      
      <ImgSlider></ImgSlider>
    </div>
  )
}

export default Home
