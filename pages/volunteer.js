import { Box, Button, Container, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { MultiSelect } from "@mantine/core";
import Head from "next/head";
import Layout from "../components/layout";

export default function Volunteer() {
  const submitForm = useForm({
    initialValues: {
      name: "",
      phone_number: "",
      email: "",
      multi_select: "",
      other: "",
    },
    validate: {
      email: (value) =>
        /^S+@S+\.S+$/.test(value) ? null : "Please enter a valid email address",
    },
  });

  return (
    <>
      <Layout>
        <Head>
          <title>focus points</title>
        </Head>
        <Container size="sm" px={0} mt="xl">
          <Box mx="auto">
            <form onsubmit={console.log(8)}>
              <TextInput
                required
                label="Name"
                placeholder="Shelby Green"
                {...submitForm.getInputProps("name")}
              />
              <TextInput
                required
                label="Phone"
                placeholder="555-555-5555"
                {...submitForm.getInputProps("phone_number")}
              />
              <TextInput
                required
                label="Email"
                placeholder="email@gmail.com"
                {...submitForm.getInputProps("email")}
              />
              <MultiSelect
                data={[
                  "Canvassing (knocking on doors, sharing info)",
                  "Planning community events",
                  "Coding",
                  "Managing social media",
                  "Other",
                ]}
                label="I want to help by... "
                placeholder="Pick all that you like"
                defaultValue={["Other"]}
                clearButtonLabel="Clear selection"
                clearable
              />
              <TextInput
                required
                label="If you said other, share how you'd like to help:"
                placeholder=""
                {...submitForm.getInputProps("other")}
              />
              <Group possition="right" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </Container>
      </Layout>
    </>
  );
}
