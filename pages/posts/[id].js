import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { MDXRemote } from "next-mdx-remote"
import DataWrapper from "../../components/datawrapperComponent"
import airtableForm from "../../components/formComponent"
import EmbedImage from "../../components/imageComponent"
import dotPlot from '../../components/dotPlotComponent.jsx'
import dotPlot2 from '../../components/dotPlotComponent2.jsx'
import jumpBox from '../../components/jumpBox.jsx'
import mapboxMap from '../../components/mapComponent.tsx'
import d3Map from '../../components/d3Component.jsx'
import porterTable from '../../components/porterTable.js'
import dilbertTable from '../../components/dilbertTable.js'
import fergusonTable from '../../components/fergusonTable.js'
import richardsonTable from '../../components/richardsonTable.js'
import johnsonTable from '../../components/johnsonTable.js'
import stevensTable from '../../components/stevensTable.js'
import nyackTable from '../../components/nyackTable.js'
import Link from 'next/link'

const customComponents = {
  DataWrapper, EmbedImage, Link,
  // MDX 3 treats lowercase tags as plain HTML, so components need capitalized names
  MapboxMap: mapboxMap, DotPlot: dotPlot, DotPlot2: dotPlot2, JumpBox: jumpBox, D3Map: d3Map,
  PorterTable: porterTable, DilbertTable: dilbertTable, FergusonTable: fergusonTable,
  RichardsonTable: richardsonTable, StevensTable: stevensTable, NyackTable: nyackTable,
  JohnsonTable: johnsonTable, AirtableForm: airtableForm,
}

export default function Post({ postData }) {

    const imagePath = `https://www.shelbytlh.com/images/${postData.image}`

    return (
        <Layout>
          <Head>
            {/* Primary Meta Tags */}
              <title>{postData.title}</title>
              <meta name="title" content={postData.title} />
              <meta name="description" content={postData.blurb} />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={postData.url} />
            <meta property="og:title" content={postData.title} />
            <meta property="og:description" content={postData.blurb} />
            <meta property="og:image" content={imagePath} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={postData.url} />
            <meta property="twitter:title" content={postData.title} />
            <meta property="twitter:description" content={postData.blurb} />
            <meta property="twitter:image" content={imagePath} />
            {/* from https://metatags.io */}

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