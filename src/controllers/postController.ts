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

export const getPostsByUserId = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const posts = await prisma.post.findMany({
        where: { authorId: userId },
        include: { author: true },
    });
    res.json(posts);
}

export const createPost = async (req: Request, res: Response) => {
    const post = await prisma.post.create({ data: req.body  });
    res.json(post);
}

export const updatePost = async (req: Request, res: Response) => {
    const postId = Number(req.params.id);
    const post = await prisma.post.update({ where: { id: postId }, data: req.body });
    res.json(post);
}

export const deletePost = async (req: Request, res: Response) => {
    const postId = Number(req.params.id);
    const post = await prisma.post.delete({ where: { id: postId } });
    res.json(post);
}