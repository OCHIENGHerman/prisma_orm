import { Request, Response } from 'express';

export const validatePostData = (req: Request, res: Response): boolean => {
    const { title, content, published, authorId } = req.body;

    if (!title || !content || published === undefined || !authorId) {
        res.status(400).json({ error: 'Title, content, published, and authorId are required fields' });
        return false;
    }

    return true;
};