import { APIS } from "../../Config/ApiConfig";
import { BaseInstance } from "../../Config/BaseInstance";
import { IRegisterUserReq, IRegisterUserRes } from "../register/RegisterDto";
import { IUser } from "../user_list/UserListDto";

export const getUserById = async (id: string): Promise<IUser> => {
  const res = await BaseInstance.get(`${APIS.user}/${id}`);
  return res.data;
};

export const updateUserById = async (
  id: string,
  body: IRegisterUserReq
): Promise<IRegisterUserRes> => {
  const res = await BaseInstance.put(`${APIS.user}/${id}`, body);
  return res.data;
};

export const addNewUser = async (
  body: IRegisterUserReq
): Promise<IRegisterUserRes> => {
  const res = await BaseInstance.post(APIS.user, body);
  return res.data;
};
