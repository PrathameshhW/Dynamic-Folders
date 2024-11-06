import { BaseInstance } from "../../../Config/BaseInstance";

interface ResponseData {
  id: number;
  name: string;
}

export const getData = async (): Promise<ResponseData[]> => {
  const res = await BaseInstance.get("/api/users");
  return res.data;
};
