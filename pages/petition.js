import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Petition() {
    return (
        <>
            <Layout>
                <Head>
                    <title>petition</title>
                </Head>
                <p className={utilStyles.headingMd}> I need to collect 1,700 signatures from City of Tallahassee residents to qualify as a candidate. Please help me reach that goal by signing a petition.
                <br/><br/>
                You can print out the petition here, sign it, and mail it to P.O Box 7357, Tallahassee FL 32314. Or fill out the form below so I can stop by with a petition and get your signature. I'll handle the rest.</p> 

                <iframe class="airtable-embed" src="https://airtable.com/embed/shr7rld8pcVDKSlcI?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="533" style={{border: '1px solid #ccc'}}></iframe>
                
            </Layout>
        </>
    )
}