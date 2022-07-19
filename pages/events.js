import Head from 'next/head'
import Layout from '../components/layout'

export default function Events() {
    return (
        <>
            <Layout>
                <Head>
                    <title>events</title>
                </Head>

                <iframe class="airtable-embed" src="https://airtable.com/embed/shr8y5m71vbfu1p8t?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>
            </Layout>
        </>
    )
}