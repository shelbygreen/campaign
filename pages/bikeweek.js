import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import flyer1 from '../public/images/bikeweekflyer-1.png'
import flyer2 from '../public/images/bikeweekflyer-2.png'

export default function BikeWeek() {
    return (
        <>
            <Layout>
                <Head>
                    <title>bike week: may 18 - 22</title>
                </Head>
                <p className={utilStyles.headingMd}>
                    May is National Bike Month!
                    <br></br><br></br>
                    To celebrate, we're hosting a series of bike-centered events
                    to highlight sustainability and public infrastructure! Bike-friendly infrastructure supports safe, affordable, and healthy ways to get around town -- without generating harmful pollutants and greenhouse gas emissions.
                    <br></br><br></br>
                    Dust off your bike and join us this week!
                    <br></br><br></br>
                    Text 'bikeweek' to 850-203-3558 for event reminders.</p>
                <br></br>

                <Image className={utilStyles.eventFlyer} src={flyer1}/>
                <Image className={utilStyles.eventFlyer} src={flyer2}/>


                {/* <p className={utilStyles.eventTitle}><b>MAY 18 - WEDNESDAY</b></p>
                <div className={utilStyles.eventBox}> <p className={utilStyles.eventBoxTitle}>diy scavenger hunt launch</p></div>
                <div className={utilStyles.eventBox}>ride of silence</div> */}
                {/* <p>May 18 - Wednesday</p>
                <p>- diy scavenger hunt launch</p>
                <p>- <b><a href="https://www.facebook.com/events/694338288377346/?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22event_aggregate%22%2C%22action_history%22%3A%22null%22%7D&notif_id=1652868060310141&notif_t=event_aggregate&ref=notif">ride of silence</a></p>
                <p>May 19 - Thursday</p>
                <p>- meet and greet</p>
                <p>May 20 - Friday</p>
                <p>- ride to school (hartsfield elementary)</p>
                <p>- happy hour</p>
                <p>May 21 - Saturday</p>
                <p>- beginner's bike ride</p>
                <p>- movie night: kiki's delivery service</p>
                <p>May 22 - Sunday</p>
                <p>- bike ride to wakulla springs</p> */}
            </Layout>
        </>
    )
}