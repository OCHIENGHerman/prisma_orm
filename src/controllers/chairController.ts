import { Request, Response } from 'express';
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
export const getAllChairs = async (req: Request, res: Response) => {
    const chairs = await prisma.chair.findMany();
    res.json(chairs);
}

export const getChairById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const chair = await prisma.chair.findUnique({ where: { id } });
    res.json(chair);
}

export const createChair = async (req: Request, res: Response) => {
    const chair = await prisma.chair.create({ data: req.body });
    res.json(chair);
}

export const updateChair = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const chair = await prisma.chair.update({ where: { id }, data: req.body });
    res.json(chair);
}

export const deleteChair = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const chair = await prisma.chair.delete({ where: { id } });
    res.json(chair);
}