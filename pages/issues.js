import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Petition() {
    return (
        <>
            <Layout>
                <Head>
                    <title>focus points</title>
                </Head>
                <p className={utilStyles.headingMd}>As Commissioner, I will focus on:
                <br/>
                1. improving our inadequate, and failing, public services (e.g. utilities) and infrastructure (e.g. roads) <br/>
                2. embracing open data, technology, and adaptive design to increase the efficiency of our public programs, services and infrastructure<br/>
                3. reducing our rate of poverty, utility disconnections, traffic crashes, and gun violence <br/>
                4. building back better, equitably. <br/>
                5. encouraging sustainable behavior in both public and private operations to protect our precious, natural resources</p> 
                
            </Layout>
        </>
    )
}