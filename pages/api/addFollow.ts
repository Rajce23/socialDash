import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../prisma/prisma"
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {userId,friendId} = req.body
  console.log(req.body)


  await prisma.user.update({
    where: { id: userId },
    data: { following:{push:friendId} }
  })
  await prisma.user.update({
    where: { id: friendId },
    data: { followers:{push:userId} }
  })
  res.status(200).json({ message: 'OK' })

}