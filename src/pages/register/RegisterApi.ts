import { APIS } from "../../Config/ApiConfig";
import { BaseInstance } from "../../Config/BaseInstance";
import { IRegisterUserReq, IRegisterUserRes } from "./RegisterDto";

export interface RegisterData {}

export const registerUser = async (
  body: IRegisterUserReq
): Promise<IRegisterUserRes> => {
  const res = await BaseInstance.post(APIS.user, body);
  return res.data;
};
