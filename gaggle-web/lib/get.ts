import axios from "axios";

export const GetPlans = async () => {
  const URL = process.env.NEXT_PUBLIC_API_URL;

  const response = await axios.get(`${URL}/plans`);
  return response.data;
};
