export default async function handler(req, res) {
    const { name, phone_number, email, type, comment } = req.body;
  
    if (!name || !phone_number || !email || !type || !comment) {
      return res
        .status(400)
        .json({ error: "Please fill out all fields", data: req.body });
    }
  
    if (req.method != "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
      "appQaXQ7mt6MnVKZt"
    );
  
    base("Website").create(
      [
        {
          fields: {
            "Name": name,
            "Phone Number": phone_number,
            "Email Address": email,
            "Type": type,
            "Comment": comment,
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
  