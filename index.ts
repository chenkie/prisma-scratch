import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function start() {
  const posts = await prisma.post.findMany({
    orderBy: [
      {
        title: 'ASC'
      },
      {
        createdAt: 'DESC'
      }
    ],
    select: {
      title: true
    }
  });

  console.log(posts);
}

start();
