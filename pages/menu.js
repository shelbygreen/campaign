import Head from 'next/head'
import Link from 'next/link'
import { Container } from "@mantine/core";
import { createStyles } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'
import headshot from '../public/images/profile-2.png'
import { getSortedPostsData } from '../lib/posts'
import Comments from '../components/comments';


// responsive styling for container
const useStyles = createStyles((theme) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
      props: {
        allPostsData
      }
  }
}

export default function Home() {

  const { classes } = useStyles();


  return (
    <>
    <Layout menu>
      <Head>
        <title>Links</title>
      </Head>

      <div className={utilStyles.container}>
        <div className={utilStyles.buttonBox}>
            <div className={utilStyles.button}><a href="/events">RSVP for our Townhall on Housing</a></div>
            <div className={utilStyles.button}><a href="/vote">Share why you vote</a></div>
            <div className={utilStyles.button}><a href="/meet">Meet Shelby</a></div>
            <div className={utilStyles.button}><a href="/issues">Issues</a></div>
            <div className={utilStyles.button}><a href="/volunteer">Volunteer</a></div>
            <div className={utilStyles.button}><Link href="/sign">Request a yard sign</Link></div>
            <div className={utilStyles.button}><a href="https://calendar.google.com/calendar/u/0?cid=Y19kZHMwcTQxdGlsY3FiMTk2M2hqZDJpNTkyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">Campaign Calendar</a></div>
            <div className={utilStyles.button}><a href="https://shelbytlh.substack.com/">Campaign Diary</a></div>
            <div className={utilStyles.button}><a href="https://secure.actblue.com/donate/shelbytlh">Donate</a></div>     
        </div>
        </div>   

    </Layout>
    </>
  )
}
