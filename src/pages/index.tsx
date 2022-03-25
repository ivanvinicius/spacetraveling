import Link from 'next/link'
import { GetStaticProps } from 'next'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Prismic from '@prismicio/client'
import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse'
import { RiUserLine, RiCalendarLine } from 'react-icons/ri'
import { useState } from 'react'

import { getPrismicClient } from '../services/prismic'
import { ICustomTypePosts } from '../types/ICustomTypePosts'

import styles from './home.module.scss'

interface Post {
  uid?: string
  first_publication_date: string | null
  data: {
    title: string
    subtitle: string
    author: string
  }
}

interface PostPagination {
  next_page: string
  results: Post[]
}

interface HomeProps {
  postsPagination: PostPagination
}

export default function Home({ postsPagination }: HomeProps) {
  const [posts, setPosts] = useState(postsPagination.results)
  const [nextPage, setNextPage] = useState<string | null>(postsPagination.next_page) //eslint-disable-line

  async function handleFetchMorePosts() {
    if (nextPage) {
      const response = await (await fetch(nextPage)).json()

      const newPosts = response.results.map((post: Post) => ({
        uid: post.uid,

        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author
        },

        first_publication_date: post.first_publication_date
      }))

      setNextPage(response.next_page)
      setPosts((oldState) => [...oldState, ...newPosts])
    }
  }

  return (
    <>
      <main className={styles.container}>
        <section className={styles.content}>
          {posts.map((post) => (
            <Link href={`/post/${post.uid}`} key={post.uid}>
              <a className={styles.postItem}>
                <h1>{post.data.title}</h1>
                <span>{post.data.subtitle}</span>

                <div className={styles.postInfo}>
                  <div>
                    <RiCalendarLine color="#BBBBBB" size={20} />
                    <time>
                      {format(
                        new Date(post.first_publication_date),
                        'dd MMM yyyy',
                        { locale: ptBR }
                      )}
                    </time>
                  </div>
                  <div>
                    <RiUserLine color="#BBBBBB" size={20} />
                    <p>{post.data.author}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}

          {!!nextPage && (
            <button
              type="button"
              className={styles.loadMore}
              onClick={handleFetchMorePosts}
            >
              Carregar mais posts
            </button>
          )}
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient()

  const response: ApiSearchResponse<ICustomTypePosts> = await client.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      // fetch: ['posts.title', 'posts.subtitle', 'posts.author'],
      pageSize: 2
    }
  )

  // const posts = response?.results.map((post) => ({
  //   uid: post.uid,

  //   data: {
  //     title: post.data.title,
  //     subtitle: post.data.subtitle,
  //     author: post.data.author
  //   },

  //   first_publication_date: format(
  //     new Date(post.first_publication_date),
  //     'dd MMM yyyy',
  //     { locale: ptBR }
  //   )
  // }))

  const postsPagination = {
    results: response.results,
    next_page: response.next_page
  }

  return {
    props: { postsPagination }
  }
}
