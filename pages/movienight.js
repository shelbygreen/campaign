import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import flyer from '../public/images/moonlightflyer.jpeg'

export default function MovieNight() {
    return (
        <>
            <Layout>
                <Head>
                    <title>06/29 movie night</title>
                </Head>
                <p className={utilStyles.headingMd}>
                    June is Pride Month! To celebrate, we're hosting an online movie night.
                    <br></br><br></br>
                    <b>Join us on June 29th, at 7pm, for an online screening of Moonlight -- a film written and produced by a former Tallahassean, Barry Jenkins</b>.
                    <br></br><br></br>
                    Moonlight is a heavy, yet poetic film that follows the life of Chiron, who struggles to understand his identity and role in the world. The film is rated R and explores how drug addiction, class divide, morality, and sexuality impact the development of a child.
                    <br></br><br></br>
                    The film will be screened on our Discord server. <p className={utilStyles.headingMdGreen}>Watch with us <a href="https://discord.gg/McbyhHwf">here</a>.</p>
                </p>
                <br></br>

                <Image className={utilStyles.eventFlyer} src={flyer}/>
            </Layout>
        </>
    )
}