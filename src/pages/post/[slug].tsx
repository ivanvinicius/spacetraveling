import { GetStaticPaths, GetStaticProps } from 'next'
import { RiCalendarLine, RiUserLine, RiTimeLine } from 'react-icons/ri'
import Prismic from '@prismicio/client'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useRouter } from 'next/router'
import { RichText } from 'prismic-dom'

import { getPrismicClient } from '../../services/prismic'

import styles from './post.module.scss'

interface Post {
  first_publication_date: string | null
  data: {
    title: string
    banner: {
      url: string
    }
    author: string
    content: {
      heading: string
      body: {
        text: string
      }[]
    }[]
  }
}

interface PostProps {
  post: Post
}

export default function Post({ post }: PostProps) {
  const { isFallback } = useRouter()

  if (isFallback || !post) {
    return (
      <main className={styles.container}>
        <section className={`${styles.content} ${styles.loading}`}>
          <h1>Carregando...</h1>
        </section>
      </main>
    )
  }

  return (
    <main className={styles.container}>
      <img src={post.data.banner.url} className={styles.banner} alt="banner" />

      <section className={styles.content}>
        <div className={styles.postHeader}>
          <h1>{post.data.title}</h1>

          <div className={styles.postInfo}>
            <div>
              <RiCalendarLine color="#BBBBBB" size={20} />
              <time>
                {format(new Date(post.first_publication_date), 'dd MMM yyyy', {
                  locale: ptBR
                })}
              </time>
            </div>
            <div>
              <RiUserLine color="#BBBBBB" size={20} />
              <p>{post.data.author}</p>
            </div>
            <div>
              <RiTimeLine color="#BBBBBB" size={20} />
              <p>4 min</p>
            </div>
          </div>
        </div>

        {post.data.content.map((postContent) => (
          <article key={postContent.heading} className={styles.postContent}>
            <h1>{postContent.heading}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: RichText.asHtml(postContent.body)
              }}
            />
          </article>
        ))}
      </section>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()
  const posts = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {}
  )
  const paths = posts.results.map((post) => ({
    params: { slug: String(post.uid) }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const prismic = getPrismicClient()
  const response = await prismic.getByUID('posts', String(slug), null)

  return {
    props: { post: response },
    revalidate: 60 * 60 * 24 // 1day
  }
}
