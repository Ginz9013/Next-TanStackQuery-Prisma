import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUser: any = async () => {
  try {
    const res = await prisma.user.findMany();
    return res;
  } catch (error) {
    return error;
  }
};

type CreateUser = {
  name: string;
  nickname: string;
  email: string;
}

export const createUser = async (params: CreateUser) => {
  try {
    const newUser = await prisma.user.create({
      data: params
    });
    return newUser;
  } catch (error) {
    console.log("create fail", error);
    return null;
  }
};