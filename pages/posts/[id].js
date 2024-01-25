import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>

        {/* content */}
        <main className="md:mt-8 lg:mt-12 relative">
            <article className="px-4 md:px-12 lg:px-0 w-full lg:w-3/5 xl:w-1/2 lg:mx-auto my-24">
                <h1 className="text-2xl lg:text-4xl font-bold">{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div className="markdown-body mt-8" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </main>
    </Layout>
  )
}

export async function getStaticPaths() {
    // Return a list of possible values for id
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}