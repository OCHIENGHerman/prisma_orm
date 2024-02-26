import { Request, Response } from 'express';
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
};

export const getAllChairs = async (req: Request, res: Response) => {
    const chairs = await prisma.chair.findMany();
    res.json(chairs);
}