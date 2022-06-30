export default async function handler(req, res) {
  const { name, phone_number, email, multi_select, other } = req.body;

  if (!name || !phone_number || !email || !multi_select || !other) {
    return res.status(400).json({ error: "Please fill out all fields" });
  }

  if (req.method != "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const required = await fetch();
}
