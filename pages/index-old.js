import Head from 'next/head'
import Link from 'next/link'
import { Container } from "@mantine/core";
import { createStyles } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'
import headshot from '../public/images/Headshot.JPG'
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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* <div className={utilStyles.container}> */}
      {/* <Container size="xl" px={0}> */}
      {/* <div className={classes.container}> */}
      <SimpleGrid
        cols={1}
        style={{padding: 10}}
        spacing="lg"
        breakpoints={[
          { maxWidth: 1023, cols: 1, spacing: 'xl' }
        ]}
        >
        {/* box 1 */}
        <div className={utilStyles.headshotBox}>
        {/* <div className={utilStyles.iframeBox}> */}
            <Image
              className={utilStyles.headshot}
              src={headshot}
            />
            {/* <center><iframe className={utilStyles.iframe} src="https://docs.google.com/presentation/d/e/2PACX-1vR2drrACCcscHt_LWutRsujQfYV0C8Va8OH-JL0NzOjgwcKmk3z9TrGZj2Q6UJv2ZgsWyuZJ316udrk/embed?start=false&loop=true&delayms=5000"></iframe></center> */}
        </div>
        {/* box 2 */}
        <div>
          <div className={utilStyles.leftBoxTextContainer}>
            <div className={utilStyles.headingLgGreen}>During the pandemic, Tallahassee’s leadership fell short.</div>
            <br></br>
            <div className={utilStyles.headingMd}>
            Our calls for <span className={utilStyles.headingMdGreen}>justice</span>, <span className={utilStyles.headingMdGreen}>safety</span>, <span className={utilStyles.headingMdGreen}>affordable utilities</span> & <span className={utilStyles.headingMdGreen}>housing</span>, <span className={utilStyles.headingMdGreen}>effective representation</span>, and <span className={utilStyles.headingMdGreen}>transparency</span> were left unanswered. That’s unacceptable.
            <br></br><br></br>
            I’m <span className={utilStyles.headingMdGreen}>Shelby Green</span>, a <span className={utilStyles.headingMdGreen}>engineer</span>, <span className={utilStyles.headingMdGreen}>researcher</span>, and former <span className={utilStyles.headingMdGreen}>public servant</span> that led the fight to prevent utility disconnections and displacement in our most vulnerable neighborhoods during the pandemic.
            
            <br></br><br></br>
            Now I'm running to <span className={utilStyles.headingMdGreen}>continue to fight</span> for a <span className={utilStyles.headingMdGreen}>sustainable</span>, <span className={utilStyles.headingMdGreen}>equitable</span>, and <span className={utilStyles.headingMdGreen}>affordable</span> Tallahassee, where:
            <ul className={utilStyles.listBox}>
              <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>our streets are safe from gun violence and traffic crashes</span></li>
              <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>everyone has access to safe and affordable housing</span></li>
              <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>our public resources and infrastructure are reliable, affordable, and efficient</span></li>
              <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>our water and air are free of pollution</span></li>
              <li className={utilStyles.listBullet}><span className={utilStyles.listItem}>our budget is transparent and works for us, the people</span></li>
            </ul>
            </div>
            <div className={utilStyles.headingLgGreen}>Together, we can build a better Tallahassee.</div>
          </div>
        </div>
      </SimpleGrid>
      <br></br><br></br>
      <div className={utilStyles.headingLgGreen} style={{padding:10}}>Contact us:</div>
      <div className={utilStyles.commentBox}>
        <Comments/>
      </div>
    </Layout>
    </>
  )
}
