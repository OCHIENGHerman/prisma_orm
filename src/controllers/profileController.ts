import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProfiles = async (req: Request, res: Response) => {
    const profiles = await prisma.profile.findMany();
    res.json(profiles);
}

export const getProfileById = async (req: Request, res: Response) => {
    const profileId = Number(req.params.id);
    const profile = await prisma.profile.findUnique({ where: { id: profileId } });
    res.json(profile);
}

export const createProfile = async (req: Request, res: Response) => {
    const profile = await prisma.profile.create({ data: req.body });
    res.json(profile);
}

export const updateProfile = async (req: Request, res: Response) => {
    const profileId = Number(req.params.id);
    const profile = await prisma.profile.update({ where: { id: profileId }, data: req.body });
    res.json(profile);
}

export const deleteProfile = async (req: Request, res: Response) => {
    const profileId = Number(req.params.id);
    const profile = await prisma.profile.delete({ where: { id: profileId } });
    res.json(profile);
}