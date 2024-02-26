import { Request, Response } from 'express';
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.json();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };