import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import prisma from "../../../prisma/prisma"
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  let userId: string | undefined;

  if (typeof query.userId === 'string') {
    userId = query.userId;
  }
  const {postId} = req.body
  await prisma.post.update({
    where: { id: postId },
    data: { likes: { push: userId } }
  })
  res.status(200).json({ message: 'OK' })
}