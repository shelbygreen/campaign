export default async function handler(req, res) {
  const { name, phone_number, signs, address, notes } = req.body;

  if (!name || !phone_number || !signs || !address) {
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
    //   "appnIm62g2ojrcOL1"
    // );

    // base("Table 1").create(
    //   [
    //     {
    //       fields: {
    //         Name: name,
    //         Address: address,
    //         "Phone Number": phone_number,
    //         Notes: notes,
    //         "Number of Yard Signs": signs,
    //       },
    //     },
    //   ],
    //   function (err, records) {
    //     if (err) {
    //       console.error(err);
    //       return res
    //         .status(400)
    //         .json({ error: "Something went wrong", message: res.body });
    //     }
    //     records.forEach(function (record) {
    //       console.log(record.getId());
    //     });
    //   }
    // );

    const data_to_send = {
      fields: {
        Name: name,
        Address: address,
        "Phone Number": phone_number,
        Notes: notes,
        "Number of Yard Signs": signs,
      },
    };

    const raw_data = await fetch(
      "https://api.airtable.com/v0/appnIm62g2ojrcOL1/Table%201",
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
