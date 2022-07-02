import Head from 'next/head'
import Layout from '../components/layout'

export default function Townhall() {
    return (
        <>
            <Layout>
                <Head>
                    <title>7/5 townhall</title>
                </Head>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrCS2nz4j9HYTXJK?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>
            </Layout>
        </>
    )
}
