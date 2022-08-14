import { Box, Button, Group, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { format } from "date-fns";
import Head from "next/head";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Event = ({ records, data }) => {
  if (records) {
    const submitForm = useForm({
      initialValues: {
        name: "",
        phone_number: "",
        date: records.fields.Date,
        location: records.fields.Location,
        event_name: records.fields.Title,
      },
    });

    const handleSubmit = async (values) => {
      const request = await fetch("/api/event_signup_submit", {
        method: "Post",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const result = await request.json();

      if (result.data != "ok") {
        showNotification({
          title: "Error",
          color: "red",
          message: "Something went wrong",
        });
      }
      if (result.data == "ok") {
        showNotification({
          title: "Success",
          color: "green",
          message: "Your submission has been received",
        });

        submitForm.setValues({
          name: "",
          phone_number: "",
          date: records.fields.Date,
          location: records.fields.Location,
          event_name: records.fields.Title,
        });
      }
    };
    const event_title = records.fields.Title;
    const event_location = records.fields.Location;
    const event_date = records.fields.Date;
    return (
      <>
        <Layout>
          <Head>
            <title>volunteer</title>
          </Head>
          <Box size="sm" mt="xl" px="10%">
            <Box>
              <Text size="xl" weight={700}>
                Sign up for {event_title}
              </Text>
              <Text>
                Fill out this form to sign up for {event_title} on{" "}
                {format(new Date(event_date), "E, MMM do")} @{" "}
                {format(new Date(event_date), "h")}
                {format(new Date(event_date), "HH") >= 12 ? "pm" : "am"} EDT
              </Text>
            </Box>
            <Box mx="auto" pt={20}>
              <form
                onSubmit={submitForm.onSubmit((values) => handleSubmit(values))}
              >
                <TextInput
                  required
                  label="Name"
                  placeholder="Shelby Green"
                  {...submitForm.getInputProps("name")}
                />
                <TextInput
                  pt={10}
                  required
                  label="Phone"
                  placeholder="555-555-5555"
                  {...submitForm.getInputProps("phone_number")}
                />
                <Group position="right" mt="md">
                  <Button type="submit">Submit</Button>
                </Group>
              </form>
            </Box>
          </Box>
        </Layout>
      </>
    );
  }

  const router = useRouter();
  useEffect(() => {
    router.push("/events");
  }, []);
  return <Layout></Layout>;
};

export default Event;

export async function getServerSideProps(ctx) {
  const absoluteUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://shelbytlh.com";

  const rawData = await fetch(`${absoluteUrl}/api/get_event_by_id`, {
    method: "POST",
    body: JSON.stringify({ id: ctx.query.id }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await rawData.json();
  const records = data.records[0];
  // console.log(data);
  // console.log(records);
  if (records) {
    return {
      props: { records }, // will be passed to the page component as props
    };
  }
  return {
    props: { records: null }, // will be passed to the page component as props
  };
}
