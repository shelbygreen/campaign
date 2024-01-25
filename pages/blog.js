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
                    Hi, I’m Shelby!
                    </p>
                    <p className="mb-5">
                    I’m a <a href="https://www.tallahassee.com/story/news/local/2022/03/16/shelby-green-data-engineer-and-neighborhood-advocate-files-run-city-commission/7047536001/" target="blank" className="font-medium lg:font-semibold text-[#FFD478] bg-[#209390] p-1 rounded hover:no-underline">recovering politician</a> in Tallahassee, FL, where I work as a researcher and independent software developer.
                    </p>             
                </div>
                </main>

                {/* blog posts */}
                <section className="ml-8">
                    <ul className="text-lg lg:text-lg font-semibold text-gray-700">
                    {allPostsData.filter(obj => { return obj.tag == 'blog';}).map(({ id, date, title, blurb }) => (
                        <li className={utilStyles.headingLg} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.headingLg}>
                                <Date dateString={date} />
                                <div>{blurb}</div>
                            </small>
                        </li>
                    ))}
                    </ul>
                </section>
                </body>
            </Layout>
        </>
    )
}