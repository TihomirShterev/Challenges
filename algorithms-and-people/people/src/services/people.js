import { baseURL } from "../config/config";

export const getTableInfo = async () => {
  try {
    const response = await fetch(`${baseURL}/people`);
    const info = await response.json();
    return info;
  } catch (err) {
    console.log(err);
  }
};
