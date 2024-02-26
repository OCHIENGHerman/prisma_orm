import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
const port: number = 3000;

const prisma = new PrismaClient()

//async function main() {
  // ... you will write your Prisma Client queries here
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: { posts: true, profile: true },
  // })
  // console.dir(allUsers), { depth: null }
//   const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { published: true },
//   })
//   console.log(post)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.send(users)
})

app.get('/chairs', async (req: Request, res: Response) => {
  const chairs = await prisma.chair.findMany()
  res.send(chairs)
})
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
