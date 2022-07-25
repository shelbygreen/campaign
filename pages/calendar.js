import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Events() {
    return (
        <>
            <Layout>
                <Head>
                    <title>calendar</title>
                </Head>
                <div className={utilStyles.slidesBox} style={{padding:10}}>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showTabs=1&showCalendars=1&title=Campaign%20Calendar&src=Y19kZHMwcTQxdGlsY3FiMTk2M2hqZDJpNTkyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"></iframe>
                </div>
            </Layout>
        </>
    )
}
