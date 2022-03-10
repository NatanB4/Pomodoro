import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Pomodoro Created by Natã Barbosa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <ul className={styles.ul}>
            <li>
            <Link href="/">
                <a className={styles.a}>PT-BR</a>
            </Link>
            </li>
            <li>
            <Link href="/pomodoro">
                <a className={styles.button}>INICIAR</a>
            </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.div}>
          <h1 className={styles.h1}>O que é a Técnica Pomodoro?</h1>
          <p>Técnica Pomodoro ou método Pomodoro é um sistema de gerenciamento de tempo que incentiva as pessoas a focar de maneira intensa e integral em apenas uma tarefa ao longo de exatos 25 minutos.</p>
          <br />
          <br />
          <p>O método pomodoro foi inventado no início dos anos 90 pelo empresário e escritor italiano Francesco Cirillo.</p>
          <div className={styles.container_buttons}>
          <Link href="/">
                <a className={styles.a}>Desenvolvedor</a>
          </Link>
          <Link href="/pomodoro">
                <a className={styles.button}>Começar</a>
          </Link>
          </div>
        </div>
        <div className={styles.image_container}>
            <Image src="/time.svg" alt="relogio" layout="fill"/>
        </div>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
