import Head from 'next/head'
import Layout from '../components/layout'

export default function Volunteer() {
    return (
        <>
            <Layout>
                <Head>
                    <title>volunteer</title>
                </Head>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrrNCV5fGnWQQlAL?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>
            </Layout>
        </>
    )
}