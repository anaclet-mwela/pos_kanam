import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient()

export default  async (req, res) => {
  if (req.method !== 'POST'){
    return res.status(405).json({message: 'Methode not allowed'})
  }

  const items = JSON.parse(req.body)

  const savedInvoice = await prisma.invoice.create({
    data: {
      // invoice data here
      Items: {
        create: items
      },
    },
    include: {
      Items: true,
    },
  })

  res.json(savedInvoice)
} 

