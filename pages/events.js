import { Container } from "@mantine/core";
import Head from "next/head";
import { EventsList } from "../components/EventsList";
import Layout from "../components/layout";

export default function Events({ records }) {
  return (
    <>
      <Layout>
        <Head>
          <title>events</title>
        </Head>
        <Container px={30}>
          <EventsList data={records} />
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  var absoluteUrl = "https://shelbytlh.com";
  if (process.env.NODE_ENV === "development") {
    absoluteUrl = "http://localhost:3000";
  }
  if (process.env.NODE_ENV === "staging") {
    absoluteUrl = "https://campaign-staging-psi.vercel.app";
  }

  const rawData = await fetch(`${absoluteUrl}/api/get_events`);
  const data = await rawData.json();
  const records = data.records;
  // console.log(records);

  return {
    props: { records }, // will be passed to the page component as props
  };
}
