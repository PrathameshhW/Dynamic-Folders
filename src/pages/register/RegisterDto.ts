import { UseFormReturnType } from "@mantine/form";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  cpassword: string;
}

export interface IRegisterUserReq extends Partial<IRegisterUser> {}

export interface IRegisterUserRes {
  id: number;
  name: string;
  email: string;
  password: string;
  token: string;
}

export interface IRegisterLayoutProps {
  form: UseFormReturnType<IRegisterUser>;
  handleRegisterSubmit: (val: IRegisterUser) => void;
  registerPending: boolean;
  onLoginClick: () => void;
}
