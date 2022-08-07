export default async function handler(req, res) {
  const { name, phone_number, email, multi_select, other } = req.body;

  if (!name || !phone_number || !email || !multi_select) {
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
    // var Airtable = require("airtable");
    // var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
    //   "appKvrQAQ2MZ8hKrW"
    // );

    // base("Interested").create(
    //   {
    //     Name: name,
    //     "Phone Number": phone_number,
    //     "Email Address": email,
    //     Options: multi_select,
    //     "If you said other, share how you'd like to help:": other,
    //   },
    //   function (err, record) {
    //     if (err) {
    //       console.error(err);
    //       res
    //         .status(400)
    //         .json({ error: "Something went wrong", message: res.body });
    //       return;
    //     }
    //     console.log(record);
    //   }
    // );

    const data_to_send = {
      fields: {
        Name: name,
        "Phone Number": phone_number,
        "Email Address": email,
        Options: multi_select,
        "If you said other, share how you would like to help:": other,
      },
    };

    const raw_data = await fetch(
      "https://api.airtable.com/v0/appKvrQAQ2MZ8hKrW/Interested",
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
    res.status(500).json({ error: error.message });
    return;
  }
}
