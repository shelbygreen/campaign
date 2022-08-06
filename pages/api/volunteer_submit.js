export default async function handler(req, res) {
  const { name, phone_number, email, multi_select, other } = req.body;

  if (!name || !phone_number || !email || !multi_select) {
    return res
      .status(400)
      .json({ error: "Please fill out all fields", data: req.body });
  }

  if (req.method != "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
    "appKvrQAQ2MZ8hKrW"
  );

  base("Interested").create(
    [
      {
        fields: {
          Name: name,
          "Phone Number": phone_number,
          "Email Address": email,
          Options: multi_select,
          "If you said other, share how you'd like to help:": other,
        },
      },
    ],
    function (err, record) {
      if (err) {
        console.error(err);
        return res
          .status(400)
          .json({ error: "Something went wrong", message: res.body });
      }
      console.log(record.getId());
    }
  );

  return res.status(200).json({ data: "ok" });
}
