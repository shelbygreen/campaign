import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import photo from '../public/images/Boarding-House.png'

export default function Pittmans() {
    return (
        <>
            <Layout>
                <Head>
                    <title>The Pittmans and Allen Subdivision</title>
                </Head>
                <p className={utilStyles.headingMd}>
                    Date: 06/27/2022 <br></br><br></br>
                    A new historical marker was unveiled in Tallahassee last week, sharing the story of Willie & Carrie Pittman.
                    
                    Below is some history about the Pittmans, their impact on Tallahassee, & a bridge that decimated their neighborhood.
                    <br></br><br></br>

                    <Image className={utilStyles.eventFlyer} src={photo}/>
                    <br></br><br></br>

                    In 1947, the Pittmans purchased a lot, just steps from FAMU, for $10 (present-day $132). They transformed it into a boarding house to serve as off-campus housing for Florida A&M College (now FAMU) students.
                    <br></br><br></br>
                    The Pittmans were the proud parents of Carrie Meek, the first Black woman elected to serve as a Florida State Senator (1981).
                    She attributed much of her success to her parents' determination to send her to college, ensuring their children would have a better life than they did.
                    
                    <br></br><br></br>
                    The Pittmans' small, thriving business was just one of almost 100 that contributed to the self-sufficiency of Allen Subdivision, which was known to have a communal and caring character.
                    
                    <br></br><br></br>
                    In 1984, the composition of Allen Subdivision dramatically changed. The Florida Dept. of Transportation exercised eminent domain to make way for what would become the M.S. Thomas bridge.
                    The bridge displaced at least twenty Black homeowners and businesses.
                    
                    <br></br><br></br>
                    Just a couple of years later, Allen Subdivision suffered another road widening project where 100 families lost their homes to bulldozers.
                    City staff tried to minimize the impact of the project, saying "[they] doubted the residents would be able to tell the difference."
                    
                    <br></br><br></br>
                    Tallahassee has a long history of using public funds & infrastructure projects to erode our neighborhoods and to displace residents.
                    Now is the time to invest in sustainable, restorative infrastructure and to stop sacrificing our neighborhoods for regressive road widening projects.
                    <br></br>

                    <p className={utilStyles.headingMdGreen}>
                        If you agree, please support my campaign for Tallahassee City Commission by <a href="https://secure.actblue.com/donate/shelbytlh">donating</a> and/or <a href="/get-involved">signing up to volunteer</a>!
                    </p>
                    <br></br>
    
                </p>
            </Layout>
        </>
    )
}