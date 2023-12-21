"use server";

import { getSelf } from "@/libs/auth-service";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/libs/db";

export const updateUser = async (values: Partial<User>) => {
  const self = await getSelf();


  const user: never[] = [];

  return user;
};
