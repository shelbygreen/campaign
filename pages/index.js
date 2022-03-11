import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import headshot from '../public/images/profile-2.png'

export default function Home() {
  
  // WIP
  // $(function() {
  //   changer();
  // });

  // function changer() {
  //     var words = ["an adaptive", "a responsive",
  //     "a resilient", "an open", "a sustainable",
  //     "a vibrant", "a collaborative", "an inviting", "an innovative"];
  //     var idx = Math.floor(words.length * Math.random());
  //     $('#change').text(words[idx]);
  //     var time = Math.floor(5000 * Math.random() + 3000);
  //     setTimeout(changer,time);
  // }

  return (
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
      <p className={utilStyles.headingLg}>Hi, I'm Shelby, and I want to represent <i>you</i> as Tallahassee's next City Commissioner.</p>
      {/* <br/><br/> */}
      <p className={utilStyles.headingMd}>As Commissioner, I will focus on:
      <br/>
      1. improving our inadequate, and failing, public services (e.g. utilities) and infrastructure (e.g. roads) <br/>
      2. embracing open data, technology, and adaptive design to increase the efficiency of our public programs, services and infrastructure<br/>
      3. reducing our rate of poverty, utility disconnections, traffic accidents, and gun violence <br/>
      4. building back better, equitably. <br/>
      5. encouraging sustainable behavior in both public and private operations to protect our precious, natural resources</p> 
      
      <p className={utilStyles.blurb}><b>Let's build <span id="change"></span> Tallahassee, together.</b></p>

      <div className={utilStyles.buttonBox}>
        <div className={utilStyles.button}><Link href="/petition">Help me get on the ballot! Sign a petition</Link></div>
        <div className={utilStyles.button}><Link href="/events">RSVP to my Campaign Kick-off Party 🥳</Link></div>
        <div className={utilStyles.button}><Link href="/get-involved">Get involved by signing up for Campaign news and events</Link></div>     
      </div> 

      <div className={homeStyles.footer}>
        <center>made with <span style={{color: '#e25555'}}>&#9829;</span> by <a href="https://www.github.com/shelbygreen">shelby green</a></center>
      </div>
    </Layout>
  )
}