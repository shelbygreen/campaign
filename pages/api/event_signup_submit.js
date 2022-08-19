import { format } from "date-fns";

export default async function handler(req, res) {
  const { name, phone_number, date, location, event_name } = req.body;

  if (!name || !phone_number) {
    res
      .status(400)
      .json({ error: "Please fill out all fields", data: req.body });
    return;
  }

  if (req.method != "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const data_to_send = {
      fields: {
        Name: name,
        "Phone Number": phone_number,
        Event: event_name,
        Date: date,
        Location: location,
      },
    };

    const raw_data = await fetch(
      "https://api.airtable.com/v0/app6nqndMXyGM7YST/Event%20Signup",
      {
        method: "Post",
        body: JSON.stringify(data_to_send),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        },
      }
    );
    if (!raw_data.ok) {
      res
        .status(400)
        .json({ error: "Something went wrong", message: res.body });
      return;
    }

    const data = await raw_data.json();

    // Send Text Message
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    // Send text message to Shelby that they signed up
    const event_date = `${format(new Date(date), "E, MMM do")}`;
    const forwarding_text_message = `${name} ${phone_number} has signed up for ${event_name} on ${event_date} at ${location}`;

    const vt_message_d1 = `${format(new Date(date), "E, MMM do")}`;
    const vt_message_d2 = `${format(new Date(date), "h")}`;
    const vt_message_d3 = `${format(new Date(date), "HH") >= 12 ? "pm" : "am"}`;
    const vt_message_d4 =
      location.toUpperCase() == "ZOOM"
        ? "\n\nYou will receive a text message about 30 minutes before the event with the link."
        : "";
    const volunteer_text_message = `Thank you for signing up for ${event_name} on ${vt_message_d1} @${vt_message_d2}${vt_message_d3} EDT${vt_message_d4}`;

    // text message to Shelby

    client.messages
      .create({
        body: forwarding_text_message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.FORWARDING_PHONE_NUMBER,
      })
      .then((message) => console.log(message.sid));

    // text message to volunteer
    if (phone_number.length == 10) {
      client.messages
        .create({
          body: volunteer_text_message,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: phone_number,
        })
        .then((message) => console.log(message.sid));
    }

    res.status(200).json({ data: "ok" });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong", message: res.body });
    return;
  }
}
