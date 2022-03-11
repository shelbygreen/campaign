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
                <p className={utilStyles.headingMd}> I need to collect petitions to qualify as a candidate on the election ballot. Please help me get on the ballot by signing a petition.
                <br/><br/>
                You must be a City of Tallahassee resident and registered voter to sign a petition! If you need to update your voter registration, please go <a href="https://registertovoteflorida.gov/eligibilityreactive">here.</a><br/>
                <br/>
                Option 1: Print out the petition <a href="https://drive.google.com/file/d/1guGGYjk2d_ipG9Myj3wKaAJ3pkoXraVM/view?usp=sharing">here</a>, sign it, and mail it to Leon County's Supervisor of Elections (P.O Box 7357), Tallahassee FL 32314. <br/>
                Option 2: Fill out the form below. I'll coordinate a time to stop by with a petition and get your signature. </p> 

                <iframe class="airtable-embed" src="https://airtable.com/embed/shr7rld8pcVDKSlcI?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="533" style={{border: '1px solid #ccc'}}></iframe>
                
            </Layout>
        </>
    )
}