import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPosts = async (req: Request, res: Response) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
}

export const getPostById = async (req: Request, res: Response) => {
    const postId = Number(req.params.id);
    const post = await prisma.post.findUnique({ where: {id: postId } });
    res.json(post);
}