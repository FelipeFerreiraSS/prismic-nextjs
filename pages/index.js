import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Prismic from '@prismicio/client'

import getPrismicClient from '../services/prismic.js'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{props.titulo}</h1>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const prismic = getPrismicClient()

  const projetcResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')], 
    { orderings: '[document.first_publication_date desc]' }
  )

  console.log(projetcResponse)

  return {
    props: {}
  }
}
