import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import sign from '../public/images/sign.png'
import Image from 'next/image'

export default function Involved() {
    return (
        <>
            <Layout>
                <Head>
                    <title>request a yard sign</title>
                </Head>
                <p className={utilStyles.headingMd} style={{padding:10}}>
                    Support the campaign by planting a yard sign! 
                </p>
                
                <p className={utilStyles.headingMdGreen} style={{padding:10}}>Request a yard sign by filling out the form below:</p>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrvddvTySL6jL26M?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>

                
            </Layout>
        </>
    )
}