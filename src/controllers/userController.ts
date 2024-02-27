import { Request, Response } from 'express';
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
}

export const getUserById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await prisma.user.findUnique({ where: { id } });
    res.json(user);
}

export const createUser = async (req: Request, res: Response) => {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
}

export const updateUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await prisma.user.update({ where: { id }, data: req.body });
    res.json(user);
}

export const deleteUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await prisma.user.delete({ where: { id } });
    res.json(user);
}