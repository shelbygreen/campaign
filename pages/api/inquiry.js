import { PrismaClient } from '@prisma/client'

// prisma client
const prisma = new PrismaClient()

// fields API request - post or read/get
export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await addBill(req, res)
  } else if (req.method === 'GET'){
    return await readBills(req, res); // making a call to the api (request) & returns response
  }
  else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function readBills(req, res) {
    const body = req.body;
    try (
        const bills = await prisma.
    )
}

async function addBill(req, res) {
  const body = req.body
  try {
    const newEntry = await prisma.inquiry.create({
      data: {
        name: body.firstName,
        email: body.email,
        subject: body.subject,
        message: body.message
      }
    })
    return res.status(200).json(newEntry, { success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  }
}