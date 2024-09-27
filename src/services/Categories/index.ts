"use server";

import axiousInstance from "@/src/lib";

 

export const getCategories = async () => {
  try {
    const { data } = await axiousInstance.get("/item-categories");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};