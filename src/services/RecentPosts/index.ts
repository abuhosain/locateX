import envConfig from "@/src/config/env.config";
import { delay } from "@/src/utils/delay";
import next from "next";

export const getRecentPosts = async () => {
  const fetchOption = {
    next : {
      tags : ["posts"]
    }
  }
    const res = await fetch(
        `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`,
        fetchOption
      );
     
      return res.json();
}