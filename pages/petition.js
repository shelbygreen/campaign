import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Petition() {
    return (
        <>
            <Layout>
                <Head>
                    <title>petition</title>
                </Head>
                I need 1,700 signatures from City of Tallahassee residents to qualify as a candidate. Please help me reach that goal by signing a petition below!
                
            </Layout>
        </>
    )
}