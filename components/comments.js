import {
    Box,
    Button,
    Container,
    Group,
    Select,
    Text,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import Head from "next/head";
import utilStyles from '../styles/utils.module.css';
  
export default function Comments() {
const submitForm = useForm({
    initialValues: {
    name: "",
    phone_number: "",
    email: "",
    type: ["Comment"],
    comment: "",
    },
    validate: {
    email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Please enter a valid email address",
    },
});

const handleSubmit = async (values) => {
    const request = await fetch("/api/comment_submit", {
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
        type: [],
        comment: "",
    });
    }
};

return (
    <>
    <Box mx="auto" pt={1}>
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
        <Select
            required
            data={[
            "Question",
            "Suggestion",
            "Request a yard sign",
            "Comment"
            ]}
            label="Type:"
            placeholder="Select a type"
            defaultValue={["Comment"]}
            clearButtonLabel="Clear selection"
            clearable
            onChange={(value) => {
            submitForm.setFieldValue("type", value);
            }}
            {...submitForm.getInputProps("type")}
        />
        <TextInput
            required
            label="Message:"
            placeholder=""
            {...submitForm.getInputProps("comment")}
        />
        <Group position="left" mt="md">
            <Button style={{backgroundColor: '#1f9390'}}type="submit">Submit</Button>
        </Group>
        </form>
    </Box>
    </>
);
}
  