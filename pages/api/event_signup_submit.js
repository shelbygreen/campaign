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
    console.log({ data });

    res.status(200).json({ data: "ok" });
    return;
  } catch (error) {
    res.status(400).json({ error: "Something went wrong", message: res.body });
    return;
  }
}
