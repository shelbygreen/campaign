import Head from 'next/head'
import Layout from '../components/layout'

export default function Dare() {
    return (
        <>
            <Layout>
                <Head>
                    <title>dare to dream</title>
                </Head>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrq4x1N8BEH3Pe2H?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>
            </Layout>
        </>
    )
}