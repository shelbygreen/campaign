import {
  Box,
  Button,
  Container,
  Group,
  MultiSelect,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import Head from "next/head";
import Layout from "../components/layout";
export default function Volunteer() {
  const submitForm = useForm({
    initialValues: {
      name: "",
      phone_number: "",
      email: "",
      multi_select: ["Other"],
      other: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Please enter a valid email address",
    },
  });

  const handleSubmit = async (values) => {
    const request = await fetch("/api/volunteer_submit", {
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
        email: "",
        multi_select: [],
        other: "",
      });
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <title>volunteer</title>
        </Head>
        <Container size="sm" mt="xl" px={20}>
          <Box>
            <Text size="xl" weight={700}>
              Volunteer
            </Text>
            <Text>
              After you sign up, you'll receive a text or email with additional
              details
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
                required
                data={[
                  "Other",
                  "Phone banking",
                  "Canvassing",
                  "Planning townhalls",
                  "Tabling",
                  "Flyering",
                  "Shooting or editing videos",
                  "Data entry",
                  "Forum prep",
                  "Editing/writing",
                ]}
                label="I want to help by... "
                placeholder="Pick all that you like"
                defaultValue={["Other"]}
                clearButtonLabel="Clear selection"
                clearable
                onChange={(value) => {
                  submitForm.setFieldValue("multi_select", value);
                }}
                {...submitForm.getInputProps("multi_select")}
              />
              <TextInput
                label="If you said other, share how you'd like to help:"
                placeholder=""
                {...submitForm.getInputProps("other")}
              />
              <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </Container>
      </Layout>
    </>
  );
}
