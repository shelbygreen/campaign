export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const event_id = req.body.id;
    const raw_data = await fetch(
      `https://api.airtable.com/v0/app6nqndMXyGM7YST/Website%20Events%20List?fields%5B%5D=id&fields%5B%5D=Title&fields%5B%5D=Date&fields%5B%5D=Location&filterByFormula=id+%3D+${event_id}&view=Future+Events`,
      {
        headers: {
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

    res.status(200).json(data);
    return;
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
}
