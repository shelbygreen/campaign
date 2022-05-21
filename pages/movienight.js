import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import kikiflyer from '../public/images/kikiflyer.jpeg'

export default function MovieNight() {
    return (
        <>
            <Layout>
                <Head>
                    <title>05/21 movie night</title>
                </Head>
                <p className={utilStyles.headingMd}>
                    May is National Bike Month!
                    <br></br><br></br>
                    To celebrate, we're hosting a series of bike-centered events
                    to highlight sustainability and public infrastructure! Bike-friendly infrastructure supports safe, affordable, and healthy ways to get around town -- without generating harmful pollutants and greenhouse gas emissions.
                    <br></br><br></br>
                    <b>Join us on May 21st, at 6:30pm, for an online screening of Kiki's Delivery Service</b>.
                    
                    We hope that this film encourages you to think about how we can redesign Tallahassee, building a more sustainable and connected city, where public funds and resources are invested into our community's wellbeing.  
                    <p className={utilStyles.headingMdGreen}>The movie night will be hosted via Zoom, link <a href="https://us06web.zoom.us/j/4186130082"><b>here</b></a>.</p>
                </p>
                <br></br>

                <Image className={utilStyles.eventFlyer} src={kikiflyer}/>
            </Layout>
        </>
    )
}