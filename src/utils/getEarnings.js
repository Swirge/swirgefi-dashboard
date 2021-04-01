import axios from "axios";
import { apiCacheTime } from "./apiCacheTime";

const getEarnings = async () => {
  try {
    const response = await axios.get(`https://api.swirge.com/earnings?_=${apiCacheTime()}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return 0;
  }
};

export { getEarnings };