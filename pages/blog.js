import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import styles from "../components/layout.module.css";

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

                <body>
                {/* personal introduction */}
                <main className="md:mt-8 lg:mt-12 relative">
                {/* picture */}
                <div className="mt-16 mb-10">
                    <img className="h-24 lg:h-32 mx-auto rounded-full" src="/images/profile-2.png" alt="Photo of Shelby Green, taken in 2022"/>
                </div>
                {/* small bio */}
                <div className="sm:w-2/4 mx-auto text-center text-lg lg:text-lg font-semibold text-gray-700 mt-4">
                    <p className="mb-5">
                    I've written about:</p>
                </div>
                </main>

                {/* blog posts */}
                <section className="mt-12 md:w-3/4 lg:w-3/5 xl:w-1/2 px-4 sm:px-12 lg:px-0 mx-auto">
                    <ul>
                    {allPostsData.filter(obj => { return obj.tag == 'blog';}).map(({ id, date, title, blurb }) => (
                        <li className="mb-12" key={id}>
                            <Link href={`/posts/${id}`}>
                                <a className="text-lg md:text-2xl font-bold leading-snug mb-4 text-vgreen">{title}</a>
                            </Link>
                            <br />
                            <small>
                                <Date className={utilStyles.headingMd} dateString={date} />
                                <div className="leading-normal text-lg md:text-xl mr-1">{blurb}</div>
                            </small>
                            <div className="block no-underline md:text-xl text-darkyellow mt-2">
                                <Link href={`/posts/${id}`}>
                                <a>Read More →</a>
                                </Link>
                            </div>
                        </li>
                    ))
                    }
                    </ul>
                </section>
                </body>
            </Layout>
        </>
    )
}