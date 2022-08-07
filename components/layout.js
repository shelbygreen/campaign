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
      <Head>
        <link rel="icon" href="/images/sunflower.png" />
        <meta
          name="description"
          content="shelby green for tallahassee city commission"
        />
        <meta property="og:image" content={"./public/images/profile-2.png"} />
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
              </a>
              <Drawer
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
              >
                {/* Drawer content */}
                <Center>
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
        </div>

        {/* alert bar */}
        <div className={styles.alertBox}>
          <a className={styles.alert} href="/events">
            RSVP to Shelby's Townhall on Housing & Displacement
          </a>
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
        <center>
          made with <span style={{ color: "#e25555" }}>&#9829;</span> by{" "}
          <a href="https://www.github.com/shelbygreen">shelby green</a>
        </center>
      </div>
    </div>
  );
}
