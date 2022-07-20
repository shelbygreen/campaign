import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Vote() {
    return (
        <>
            <Layout>
                <Head>
                    <title>reasons to vote</title>
                </Head>
                <p className={utilStyles.headingMd} style={{padding: '5px'}}>
                    July 25th is the last day to register to vote, or change your political party affiliation, in Florida.
                    <br></br><br></br>
                    We're doing a digital voter registration drive to encourage folks to register and participate in the democratic process!
                    <br></br><br></br>
                    Help us by sharing why you vote below. If you'd like to help register voters in-person, sign up <b><a href="/volunteer">here</a>.</b>
                </p>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrplWEhrKMhZcc8f?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="600" style={{border: '1px solid #ccc'}}></iframe>
            </Layout>
        </>
    )
}
