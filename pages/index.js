import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'
import headshot from '../public/images/profile-2.png'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
      props: {
        allPostsData
      }
  }
}

export default function Home({allPostsData}) {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* navigation */}
      <div className={utilStyles.headshotBox}>
        <Image
        className={utilStyles.headshot}
        src={headshot}
        />
      </div>
      {/* introduction  */}
      {/* <p className={utilStyles.headingLg}>Hi, I'm Shelby, and I want to represent <i>you</i> as Tallahassee's next City Commissioner (Seat 5).</p>
      <p className={utilStyles.headingLg}>As a policy analyst, researcher, and software developer, I know how to develop innovative and data-driven policies that will transform Tallahassee into an affordable, integrated, sustainable, and efficient City that works for all of us. </p> */}
      <p className={utilStyles.tiny}><a href="https://drive.google.com/file/d/1F6qLEWs0egcIYQFTFj8AdnAkSYuBVNFX/view">resume</a> | <a href="https://instagram.com/shelbyisrunning">instagram</a> | <a href="https://instagram.com/shelbyisrunning">facebook</a> | <a href="https://www.google.com/search?q=%22shelby+green%22+%22tallahassee%22+%22news%22&oq=%22shelby+green%22+%22tallahassee%22+%22news%22">in the news</a></p>
      <p className={utilStyles.headingMd}>As Commissioner, I will focus on:
      <br/>
      1. improving our inadequate, and failing, public services (e.g. utilities) and infrastructure (e.g. roads) <br/>
      2. embracing open data, technology, and adaptive design to increase the efficiency of our public programs, services and infrastructure<br/>
      3. reducing our rate of poverty, utility disconnections, traffic crashes, and gun violence <br/>
      4. building back better, equitably. <br/>
      5. encouraging sustainable behavior in both public and private operations to protect our precious, natural resources</p> 
      
      <p className={utilStyles.blurb}><b>Let's build <span id="change"></span> Tallahassee, together.</b></p>

      <div className={utilStyles.buttonBox}>
      {/* <div className={utilStyles.button}><a href="/">Events Calendar (coming soon)</a></div> */}
      <div className={utilStyles.button}><Link href="/bikeweek">Events for Bike Week</Link></div>
      <div className={utilStyles.button}><Link href="/get-involved">Sign up for the campaign newsletter</Link></div>
      <div className={utilStyles.button}><a href="https://secure.actblue.com/donate/shelbytlh">Donate</a></div>     
      </div> 

      {/* footer */}
      <div className={homeStyles.footer}>
        <center>made with <span style={{color: '#e25555'}}>&#9829;</span> by <a href="https://www.github.com/shelbygreen">shelby green</a></center>
      </div>
    </Layout>
    </>
  )
}