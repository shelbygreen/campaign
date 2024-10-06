import {
    Button,
    Group,
    Textarea,
    TextInput
  } from "@mantine/core";
  import path from 'path';
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

export default function airtableForm(props) {

    const formPath = path.join(process.cwd(), props.apiLink)

    // form values
    const submitForm = useForm({
        initialValues: {
          name: "",
          phone_number: "",
          email: "",
          zip: "",
          learn: ""
        },
      });

    // form
    const handleSubmit = async (values) => {
        const request = await fetch(formPath, {
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
            message: "Thanks for joining!",
            });

            submitForm.setValues({
                name: "",
                phone_number: "",
                email: "",
                zip: "",
                learn: ""
            });
        }
    };
  
    return (
        <>
        <body>
        <section>
        {/* <Box mx="auto" pt={20}> */}
            <form onSubmit={submitForm.onSubmit((values) => handleSubmit(values))}>
                <TextInput
                    pt={20}
                    required
                    label="Name"
                    placeholder=""
                    {...submitForm.getInputProps("name")}
                />
                <TextInput
                    pt={20}
                    required
                    label="Phone Number"
                    placeholder=""
                    {...submitForm.getInputProps("phone_number")}
                />
                <TextInput
                    pt={20}
                    required
                    label="Email"
                    placeholder=""
                    {...submitForm.getInputProps("email")}
                />
                <Textarea
                    pt={20}
                    required
                    label="Zip Code"
                    placeholder=""
                    autosize
                    {...submitForm.getInputProps("zip")}
                />
                <Textarea
                    pt={20}
                    label="What are you interested in learning or hearing more about?"
                    placeholder=""
                    autosize
                    minRows={2}
                    {...submitForm.getInputProps("learn")}
                />
                <Group position="right" mt="md" pt={20} pb={20}>
                    <Button
                        variant="filled"
                        color="yellow"
                        size="md"
                        type="submit">
                            Join
                    </Button>
                </Group>
            </form>
        </section>
        </body>
    </>
);
}