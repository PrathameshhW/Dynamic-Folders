import { BaseInstance } from "../../Config/BaseInstance";
import { IRegisterUserReq, IRegisterUserRes } from "./RegisterDto";

export interface RegisterData {}

export const registerUser = async (
  body: IRegisterUserReq
): Promise<IRegisterUserRes> => {
  const res = await BaseInstance.post("/api/users", body);
  return res.data;
};
