import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'
import logo from '../public/images/logo.jpg'

const name = 'Shelby Green'
export const siteTitle = "Vote Green"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/sunflower.png" />
        <meta
          name="description"
          content="shelby green for tallahassee city commission"
        />
        <meta
          property="og:image"
          content={"./public/images/profile-2.png"}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* header starts */}
      <header className={styles.header}>
        {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
       
        {/* navigation bar */}
        <div className={styles.nav}>
          <div className={styles.navbar}>
            <a href="/" className={styles.logo}>
              <Image src={logo}/>
            </a>
            <div className={styles.navbarItems}>
              <a className={styles.meet} href="/meet">Meet Shelby</a>
              <a className={styles.issues} href="/issues">Issues</a>
              <a className={styles.volunteer} href="/volunteer">Volunteer</a>
              <a className={styles.blog} href="/blog">Blog</a>
              <a href="https://secure.actblue.com/donate/shelbytlh" className={styles.donateBox}>Donate</a>
              <a className={styles.menu} href="/menu">Menu</a>
            </div>
          </div>
        </div>

        {/* alert bar */}
        <div className={styles.alertBox}>
          <a className={styles.alert} href="/events">RSVP to Shelby's Meet and Greet on 7/22, 6pm</a>
        </div>
      </header>

        {/* index.js */}
        {/* {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          // a different page
          <>
            <h2 className={utilStyles.heading2Xl}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>TESTING</a>
              </Link>
            </h2>
          </>
        )} */}
      {/* </header> */}

      {/* body */}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      {/* footer */}
      <div className={styles.footer}>
        <center>made with <span style={{color: '#e25555'}}>&#9829;</span> by <a href="https://www.github.com/shelbygreen">shelby green</a></center>
      </div>
    </div>
  )
}