import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Involved() {
    return (
        <>
            <Layout>
                <Head>
                    <title>get involved</title>
                </Head>
                
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrAnyjGgo8VmOJJO?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>

                
            </Layout>
        </>
    )
}