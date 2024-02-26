import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
async function main() {
  // ... you will write your Prisma Client queries here
//   await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//       posts: {
//         create: { title: 'Hello World' },
//       },
//       profile: {
//         create: { bio: 'I like turtles' },
//       },
//     },
//   })

//   const allUsers = await prisma.user.findMany({
//     include: {
//         posts: true,
//         profile: true,
//     },
//   })
//   console.dir(allUsers, {depth: null})

const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })
  console.log(post)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })