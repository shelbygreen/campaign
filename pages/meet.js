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

export default function Meet() {

  const { classes } = useStyles();


  return (
    <>
    <Layout menu>
      <Head>
        <title>Meet Shelby</title>
      </Head>
      
      {/* <SimpleGrid
        cols={1}
        style={{padding: 10}}
        spacing="lg"
        breakpoints={[
          { cols: 1, spacing: 'xl' }
        ]}
        > */}
        {/* box 1 */}
        <div className={utilStyles.slidesBox}>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR2drrACCcscHt_LWutRsujQfYV0C8Va8OH-JL0NzOjgwcKmk3z9TrGZj2Q6UJv2ZgsWyuZJ316udrk/embed?start=false&loop=true&delayms=5000" allowfullscreen="true"></iframe>
        </div>
        {/* box 2 */}
        {/* <div>
            TWO
        </div>    */}
    {/* </SimpleGrid> */}
    </Layout>
    </>
  )
}