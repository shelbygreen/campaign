import {
  Box,
  Button,
  Group,
  NumberInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import Head from "next/head";
import Layout from "../components/layout";

export default function Sign() {
  const submitForm = useForm({
    initialValues: {
      name: "",
      phone_number: "",
      signs: 1,
      address: "",
      notes: "",
    },
  });

  const handleSubmit = async (values) => {
    const request = await fetch("/api/request_signs_submit", {
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
        signs: 1,
        address: "",
        notes: "",
      });
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <title>volunteer</title>
        </Head>
        <Box size="sm" mt="xl" px="10%">
          <Box>
            <Text size="xl" weight={700}>
              Request a yard sign
            </Text>
            <Text>
              Fill out this form and someone from the campaign will be in
              contact soon!
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
              <NumberInput
                pt={10}
                required
                label="# of yard signs"
                defaultValue={1}
                min={1}
                {...submitForm.getInputProps("signs")}
              />
              <TextInput
                pt={10}
                required
                label="Address"
                placeholder="123 Main St"
                {...submitForm.getInputProps("address")}
              />
              <TextInput
                pt={10}
                label="Special Requests"
                placeholder="Leave it on my porch"
                {...submitForm.getInputProps("notes")}
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
