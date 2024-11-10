import { UseFormReturnType } from "@mantine/form";

export interface IAddEditUser {
  name: string;
  email: string;
  password: string;
}

export interface IAddEditUserLayoutProps {
  form: UseFormReturnType<IAddEditUser>;
  getUserFetching: boolean;
  handleOnSubmit: (formValues: IAddEditUser) => void;
  buttonLoading: boolean;
}
