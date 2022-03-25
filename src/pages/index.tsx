import { RiUserLine, RiCalendarLine } from 'react-icons/ri'
import Link from 'next/link'

import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <Link href="/post/slug">
          <a className={styles.postItem}>
            <h1>Como utilizar Hooks no React</h1>
            <span>Pensando em sincronização em vez de clicos de vida.</span>

            <div className={styles.postInfo}>
              <div>
                <RiCalendarLine color="#BBBBBB" size={20} />
                <time>24 de março de 2021</time>
              </div>
              <div>
                <RiUserLine color="#BBBBBB" size={20} />
                <p>Ivan Vinicius Boneti</p>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/post/slug">
          <a className={styles.postItem}>
            <h1>Criando um app CRA do zero</h1>
            <span>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App.
            </span>

            <div className={styles.postInfo}>
              <div>
                <RiCalendarLine color="#BBBBBB" size={20} />
                <time>19 de abril de 2021</time>
              </div>
              <div>
                <RiUserLine color="#BBBBBB" size={20} />
                <p>Diego Fernandes</p>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/post/slug">
          <a className={styles.postItem}>
            <h1>Por que a Meta criou o GraphQL?</h1>
            <span>
              Linguagem de consulta se tornou pública em 2015 e até hoje segue
              como referência no desenvolvimento de novas aplicações
            </span>

            <div className={styles.postInfo}>
              <div>
                <RiCalendarLine color="#BBBBBB" size={20} />
                <time>19 de abril de 2021</time>
              </div>
              <div>
                <RiUserLine color="#BBBBBB" size={20} />
                <p>Joseph Oliveira</p>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/post/slug">
          <a className={styles.postItem}>
            <h1>Axios um cliente HTTP</h1>
            <span>
              Ao invés de criarmos três arquivos em cada projeto, criamos apenas
              um e compartilhamos entre os projetos.
            </span>

            <div className={styles.postInfo}>
              <div>
                <RiCalendarLine color="#BBBBBB" size={20} />
                <time>17 de Set de 2020</time>
              </div>
              <div>
                <RiUserLine color="#BBBBBB" size={20} />
                <p>Joseph Oliveira</p>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/post/slug">
          <a className={styles.postItem}>
            <h1>Obtendo o status de progresso do envio de dados com Axios</h1>
            <span>
              Imagine que você tem um app front end que faz upload de arquivos
              para um servidor.
            </span>

            <div className={styles.postInfo}>
              <div>
                <RiCalendarLine color="#BBBBBB" size={20} />
                <time>17 de Set de 2020</time>
              </div>
              <div>
                <RiUserLine color="#BBBBBB" size={20} />
                <p>Joseph Oliveira</p>
              </div>
            </div>
          </a>
        </Link>

        <button type="button" className={styles.loadMore}>
          Carregar mais posts
        </button>
      </section>
    </main>
  )
}
