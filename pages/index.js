import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'
import headshot from '../public/images/profile-2.png'
import styles from '../components/layout.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
      props: {
        allPostsData
      }
  }
}

export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={utilStyles.container}>
        <div className={utilStyles.rowBox}>
          <div className={utilStyles.leftBox}>
            <div className={utilStyles.leftBoxTextContainer}>
              <div className={utilStyles.headingMdGreen}>During the pandemic, Tallahassee’s leadership fell short.</div>
              <br></br>
              <div className={utilStyles.headingMd}>
              Our calls for justice, safety, affordable utilities & housing, and transparency were left unanswered. That’s unacceptable.
              <br></br><br></br>
              I’m <span className={utilStyles.headingMdGreen}>Shelby Green</span> and I’m running for <span className={utilStyles.headingMdGreen}>Tallahassee City Commission (Seat 5)</span> to fight for a sustainable, equitable, and affordable Tallahassee, where:
              <ul className={utilStyles.listBox}>
                <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>our streets are safe from gun violence and traffic crashes</span></li>
                <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>everyone has access to safe and affordable housing</span></li>
                <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>our public resources and infrastructure are reliable, affordable, and efficient</span></li>
                <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>our budget is transparent and works for us, the people</span></li>
                <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>everyone is represented, heard, and has access to opportunity</span></li>
              </ul>
              </div>
              <div className={utilStyles.headingLgGreen}>Together, we can build a better Tallahassee.</div>
              <div className={utilStyles.bottomBox}>
                <div className={utilStyles.contactBox}>
                  <form action="/send-data-here" method="post">
                    <label className={utilStyles.nameForm} for="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <label for="email">Email Address</label>
                    <input type="text" id="email" name="email" />
                    <label for="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className={utilStyles.headshotBox}>
            <Image className={utilStyles.headshot} src={headshot} />
          </div>
        </div>
      </div>

      {/* <div className={utilStyles.headshotBox}>
        <Image
        className={utilStyles.headshot}
        src={headshot}
        />
      </div> */}
      {/* introduction  */}
      {/* <p className={utilStyles.headingLg}>Hi, I'm Shelby, and I want to represent <i>you</i> as Tallahassee's next City Commissioner (Seat 5).</p>
      <p className={utilStyles.headingLg}>As a policy analyst, researcher, and software developer, I know how to develop innovative and data-driven policies that will transform Tallahassee into an affordable, integrated, sustainable, and efficient City that works for all of us. </p> */}
      {/* <p className={utilStyles.tiny}><a href="https://drive.google.com/file/d/1F6qLEWs0egcIYQFTFj8AdnAkSYuBVNFX/view">resume</a> | <a href="https://instagram.com/shelbyisrunning">instagram</a> | <a href="https://instagram.com/shelbyisrunning">facebook</a> | <a href="https://www.google.com/search?q=%22shelby+green%22+%22tallahassee%22+%22news%22&oq=%22shelby+green%22+%22tallahassee%22+%22news%22">in the news</a></p>
      <p className={utilStyles.headingMd}>As Commissioner, I will focus on:
      <br/>
      1. improving our inadequate, and failing, public services (e.g. utilities) and infrastructure (e.g. roads) <br/>
      2. embracing open data, technology, and adaptive design to increase the efficiency of our public programs, services and infrastructure<br/>
      3. reducing our rate of poverty, utility disconnections, traffic crashes, and gun violence <br/>
      4. building back better, equitably. <br/>
      5. encouraging sustainable behavior in both public and private operations to protect our precious, natural resources</p>  */}
      
      {/* <p className={utilStyles.blurb}><b>Let's build <span id="change"></span> Tallahassee, together.</b></p> */}

      {/* <div className={utilStyles.buttonBox}>
        <div className={utilStyles.button}><a href="/movienight">Join the movie night!</a></div>
        <div className={utilStyles.button}><a href="https://airtable.com/shrBn1gZmpMaM8Oia">Sign up to Canvass</a></div>
        <div className={utilStyles.button}><Link href="/sign">Request a yard sign</Link></div>
        <div className={utilStyles.button}><Link href="/get-involved">Join the campaign</Link></div>
        <div className={utilStyles.button}><a href="https://secure.actblue.com/donate/shelbytlh">Donate</a></div>     
      </div>  */}
    </Layout>
    </>
  )
}