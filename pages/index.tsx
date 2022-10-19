import { Title } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeronLogo from '../public/heron-logo-simple.svg'
import { FaGithub } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heron Mobile</title>
        <meta name="description" content="Heron Mobile" />
      </Head>

      <header className={styles.header}>
        <div className={styles.group}>
          <Image src={HeronLogo} height={100} width={100}/>
          <Title order={1}>Heron</Title>
        </div>
        <FaGithub size={32}/>
      </header>
      
    </div>
  )
}

export default Home
