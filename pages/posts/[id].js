import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { MDXRemote } from "next-mdx-remote"
import DataWrapper from "../../components/datawrapperComponent"
import EmbedImage from "../../components/imageComponent"
import Link from 'next/link'

const customComponents = { DataWrapper, EmbedImage, Link }

export default function Post({ postData }) {
    return (
        <Layout>
          <Head>
              <title>{postData.title}</title>
          </Head>
  
          {/* content */}
          <main className="px-4 md:px-12 lg:px-0 w-full lg:w-3/5 xl:w-1/2 lg:mx-auto my-24 text-gray-700">
              <article className="mt-4 prose prose-lg md:prose-xl prose-a:font-bold marker:prose-li:text-darkyellow mr-1">
                  <h1 className="text-2xl lg:text-4xl font-bold text-vgreen">{postData.title}</h1>
                  <div className="text-lg md:text-xl font-bold">
                      <Date dateString={postData.date}/>
                  </div>
                  <MDXRemote {...postData.contentHtml} components={customComponents}/>
                  {/* <div className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
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