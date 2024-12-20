import { APIS } from "../../Config/ApiConfig";
import { BaseInstance } from "../../Config/BaseInstance";

export interface LoginData {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
  profileImage: string;
}

export const loginUser = async (): Promise<LoginData[]> => {
  const res = await BaseInstance.get(APIS.user);
  return res.data;
};
