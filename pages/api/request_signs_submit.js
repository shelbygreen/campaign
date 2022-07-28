export default async function handler(req, res) {
  const { name, phone_number, signs, address, notes } = req.body;

  if (!name || !phone_number || !signs || !address) {
    return res
      .status(400)
      .json({ error: "Please fill out all fields", data: req.body });
  }

  if (req.method != "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
    "appnIm62g2ojrcOL1"
  );

  base("Table 1").create(
    [
      {
        fields: {
          Name: name,
          Address: address,
          "Phone Number": phone_number,
          Notes: notes,
          "Number of Yard Signs": signs,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return res
          .status(400)
          .json({ error: "Something went wrong", message: res.body });
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );

  return res.status(200).json({ data: "ok" });
}
