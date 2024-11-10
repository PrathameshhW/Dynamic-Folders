import { APIS } from "../../Config/ApiConfig";
import { BaseInstance } from "../../Config/BaseInstance";
import { IUser } from "./UserListDto";

export const getUserList = async (): Promise<IUser[]> => {
  const res = await BaseInstance.get(APIS.user);
  return res.data;
};
