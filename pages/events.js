import Head from 'next/head'
import Layout from '../components/layout'

export default function Events() {
    return (
        <>
            <Layout>
                <Head>
                    <title>events</title>
                </Head>

                <iframe class="airtable-embed" src="https://airtable.com/embed/shrkF5kXqB3FencTW?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>
            </Layout>
        </>
    )
}