// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare const global: any;

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'development') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;