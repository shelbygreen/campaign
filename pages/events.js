import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Events() {
    return (
        <>
            <Layout>
                <Head>
                    <title>events</title>
                </Head>

                <iframe class="airtable-embed" src="https://airtable.com/embed/shrHujMl7y9aa0tgy?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>
            </Layout>
        </>
    )
}