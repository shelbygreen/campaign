import { Box, Button, Center, Drawer, useMantineTheme } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/images/logo.jpg";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

const name = "Shelby Green";
export const siteTitle = "Vote Green";

export default function Layout({ children, home }) {
  // for the drawer
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.container}>
      {/* header */}
      <Head>
        <title>Shelby Green</title>
        <meta name='description' content='Shelby Green is a recovering politician, researcher, and software developer in Tallahasse, Florida.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/sunflower.png'  />
      </Head>

      {/* <Head>
        <link rel="icon" href="/images/sunflower.png" />
        <meta
          name="description"
          content="shelby green for tallahassee city commission"
        />
        <meta property="og:image" content={"./public/images/profile-2.png"} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}

      {/* header starts */}
      <a className="flex items-center bg-vgreen text-white text-sm font-bold px-4 py-3" role="alert" href="../posts/who-to-flow-for">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>Don't know who to vote for? Check out this simple flowchart!</p>
      </a>
      {/* header -- navigation bar */}
      <header className="relative z-20 flex justify-between items-center pt-12 text-gray-700">
        <div className="flex block items-center w-full justify-center">
            <a href="/" className="md:absolute md:left-0 md:ml-12 hover:no-underline font-bold text-xl font-semiboldeading-none border-b-2 border-[#209390]">Shelby Green</a>
            {/* <a href="/writing" className="md:absolute md:right-14.5 md:mr-12 hover:no-underline font-bold text-xl font-semiboldeading-none border-b-2 border-[#209390]">Writing</a> */}
            {/* <a href="/speaking" className="md:absolute md:right-20 md:mr-12 hover:no-underline font-bold text-xl font-semiboldeading-none border-b-2 border-[#209390]">Speaking</a> */}
            <a href="/portfolio" className="md:absolute md:right-20 md:mr-12 hover:no-underline font-bold text-xl font-semiboldeading-none border-b-2 border-[#209390]">Portfolio</a>
            <a href="/blog" className="md:absolute md:right-0 md:mr-12 hover:no-underline font-bold text-xl font-semiboldeading-none border-b-2 border-[#209390]">Blog</a>
          </div>
        </header>
        
      {/* <header className={styles.header}> */}
        {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}

        {/* navigation bar */}
        {/* <div className={styles.nav}>
          <div className={styles.navbar}>
            <a href="/" className={styles.logo}>
              <Image src={logo} />
            </a>
            <div className={styles.navbarItems}>
              <a className={styles.meet} href="/meet">
                Meet Shelby
              </a>
              <a className={styles.issues} href="/issues">
                Issues
              </a>
              <a className={styles.volunteer} href="/volunteer">
                Volunteer
              </a>
              <a className={styles.sign} href="/sign">
                Yard Sign
              </a>
              <a className={styles.blog} href="https://shelbytlh.substack.com">
                Diary
              </a>
              <a
                href="https://secure.actblue.com/donate/shelbytlh"
                className={styles.donateBox}
              >
                Donate
              </a> */}
              {/* <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                overlayColor={
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                position="right"
                size="75%"
              > */}
                {/* Drawer content */}
                {/* <Center>
                  <Image src={logo} />
                </Center>
                <Box mx={10} mt={20}>
                  <Center>
                    <Link href="/vote" passHref>
                      <Button className={utilStyles.button}>
                        Share why you vote
                      </Button>
                    </Link>
                  </Center>
                  <Center>
                    <Link href="/meet" passHref>
                      <Button className={utilStyles.button}>Meet Shelby</Button>
                    </Link>
                  </Center>
                  <Center>
                    <Link href="/issues" passHref>
                      <Button className={utilStyles.button}>Issues</Button>
                    </Link>
                  </Center>
                  <Center>
                    <Link href="/volunteer" passHref>
                      <Button className={utilStyles.button}>Volunteer</Button>
                    </Link>
                  </Center>
                  <Center>
                    <Link href="/sign" passHref>
                      <Button className={utilStyles.button}>
                        Request a yard sign
                      </Button>
                    </Link>
                  </Center>
                  <Center>
                    <Link
                      href="https://calendar.google.com/calendar/u/0?cid=Y19kZHMwcTQxdGlsY3FiMTk2M2hqZDJpNTkyY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                      passHref
                    >
                      <Button className={utilStyles.button}>
                        Campaign Calendar
                      </Button>
                    </Link>
                  </Center>
                  <Center>
                    <Link href="https://shelbytlh.substack.com/" passHref>
                      <Button className={utilStyles.button}>
                        Campaign Diary
                      </Button>
                    </Link>
                  </Center>
                  <Center>
                    <Link
                      href="https://secure.actblue.com/donate/shelbytlh"
                      passHref
                    >
                      <Button className={utilStyles.button}>Donate</Button>
                    </Link>
                  </Center>
                </Box>
              </Drawer>
              <Button
                className={styles.menu}
                onClick={() => setOpened(true)}
                variant="subtle"
              >
                Menu
              </Button>
            </div>
          </div>
        </div> */}

        {/* alert bar */}
        {/* <div className={styles.alertBox}>
          <a className={styles.alert} href="/events">
            Help us Get out the Vote! Sign up for a Volunteer Shift
          </a>
        </div> */}
      {/* </header> */}

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
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}

      {/* footer */}
      {/* <div className={styles.footer}>
        <center>
          made with <span style={{ color: "#e25555" }}>&#9829;</span> by{" "}
          <a href="https://www.github.com/shelbygreen">shelby green</a>
        </center>
      </div> */}
    </div>
  );
}
