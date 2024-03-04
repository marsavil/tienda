"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import User from "../models/user.model";

import { connectToDB } from "../mongoose";

interface Params {
  id: string;
  username: string;
  name: string;
  lastname: string;
  image: string;
  telephone: string;
  address: string;
  postCode: string;
  province: string;
  city: string;
  country: string;
  path: string;
}
export async function updateUser({
  id,
  lastname,
  name,
  path,
  username,
  telephone,
  address,
  postCode,
  city,
  province,
  country,
  image,
}: Params): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id },
      {
        username: username.toLowerCase(),
        name,
        lastname,
        telephone,
        address,
        postCode,
        city,
        province,
        country,
        image,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId })
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

