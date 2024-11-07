import { BaseInstance } from "../../Config/BaseInstance";

export interface LoginData {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
}

export const login = async (): Promise<LoginData[]> => {
  const res = await BaseInstance.get("/api/users");
  return res.data;
};
