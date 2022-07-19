import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Petition() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Issues</title>
                </Head>

                <div>
                    <div className={utilStyles.headingMd} style={{padding: '10px'}}> Our leaders continue to promise solutions that never come. We deserve justice, foresight, and safety, and I plan to deliver those results by continuing the work I’ve done to encourage people-centered, data-driven policies in City Hall. </div>

                    <div className={utilStyles.headingMd} style={{padding: '10px'}}> As City Commissioner, I will work to make Tallahassee a sustainable, equitable, and affordable City by focusing on these items:</div>
                    <br></br>
                    <div className={utilStyles.headingSm}>
                    <ol type="1" className={utilStyles.listBox}>
                        <li className={utilStyles.listNumber}>Improving failed utilities and transportation</li>
                        <span className={utilStyles.listItem}>
                            Our utility system burdens working-class households, is built with crumbling infrastructure, and is riddled with poorly communicated rate hikes and disconnections. Our transportation system is unreliable and viewed as an inconvenience. It’s time for a rehaul.
                            As your next City Commissioner, I will reform our public utilities to have fair rates, transparency, and receive necessary funding to rebuild our failing critical infrastructure. 
                        </span>
                        <br></br><br></br>
                        <li className={utilStyles.listNumber}>Make housing affordable</li>
                        <span className={utilStyles.listItem}>
                            Our current leadership has let rent reach all time highs while families face displacement from historic communities. 
                            We need representation that will act to prevent gentrification and build responsible development. As your leader, I will fight to guarantee tenant protections, better monitor the market, and provide the “missing middle” in affordable housing so members of our community aren’t priced out of the place they call home. 
                        </span>
                        <br></br><br></br>
                        <li className={utilStyles.listNumber}>A safe, healthy, and clean environment</li>
                        <span className={utilStyles.listItem}>
                            Traffic crashes and gun violence are the top two reasons for children’s death in the country. Our city commission must act to preserve life by reducing collisions, alleviating poverty, and redesigning our streets that allow for vibrant use by all modes of transportation, not just cars.
                            As your next City Commissioner, I will fully commit to Vision Zero by publicly tracking traffic fatalities and building infrastructure that prioritizes pedestrian and cyclist safety. 
                        </span>
                        <br></br><br></br>
                        <li className={utilStyles.listNumber}>Improving transparency and accountability through open communication, data, and technology</li>
                        <span className={utilStyles.listItem}>
                            Tallahassee has a reputation of being corrupt. Recently, former Mayors and senior City Staff have been indicited for abusing public power for private benefit. To recover from this deep-rooted corruption, we need to increase oversight and accountability in City Hall.
                            As your next City Commissioner, I will lead the charge to increase public participation and awareness by developing a program to track and publicize the Commission's vote record, making it easier for residents to stay informed on City news and engaged in the democratic process.
                        </span>
                    </ol>
                    </div>
                </div>
                
            </Layout>
        </>
    )
}