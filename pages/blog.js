import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
      props: {
        allPostsData
      }
  }
}


export default function About({allPostsData}) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Blog</title>
                </Head>
                {/* blog posts */}
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>A place to share my notes and thoughts publicly:</h2>
                    <ul className={utilStyles.list}>
                    {allPostsData.filter(obj => { return obj.tag == 'blog';}).map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                    </ul>
                </section>
            </Layout>
        </>
    )
}