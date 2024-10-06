export default async function handler(req, res) {
    const { name, phone_number, address, story, service, release } = req.body;
  
    if (!name || !phone_number || !address) {
      res
        .status(400)
        .json({ error: "Please fill out the required fields", data: req.body });
      return;
    }
  
    if (req.method != "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
  
    try {

      const data_to_send = service != "" ? {
        fields: {
          Name: name,
          "Phone Number": phone_number,
          Address: address,
          Story: story,
          Service: service,
          Release: release
        },
      } : {
        fields: {
          Name: name,
          "Phone Number": phone_number,
          Address: address,
          Story: story,
          Release: release
        },
      };
      
      const raw_data = await fetch(
        "https://api.airtable.com/v0/app05KHpz00DhQ3vI/Table%201",
        // found here: https://airtable.com/app05KHpz00DhQ3vI/api/docs
        {
          method: "Post",
          body: JSON.stringify(data_to_send),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          },
        }
      );

      // console.log(raw_data);
      // console.log(data_to_send);
      
      if (!raw_data.ok) {
        res
          .status(400)
          .json({ error: "Something went wrong", message: res.body });
        return;
      }
  
      const data = await raw_data.json();
      // console.log({ data_to_send });
  
      res.status(200).json({ data: "ok" });
      return;
    } catch (error) {
      res.status(400).json({ error: "Something went wrong", message: res.body });
      return;
    }
  }
  