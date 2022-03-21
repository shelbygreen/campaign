import Head from 'next/head'
import Layout from '../components/layout'

export default function Podcast() {
    return (
        <>
            <Layout>
                <Head>
                    <title>podcast</title>
                </Head>

                <iframe class="airtable-embed" src="https://airtable.com/embed/shryW4RjdJd1aZ6H0?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>
            </Layout>
        </>
    )
}