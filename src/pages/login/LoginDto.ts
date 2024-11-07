import { UseFormReturnType } from "@mantine/form";

export interface ILoginLayoutProps {
  form: UseFormReturnType<{ email: string; password: string }>;
  onCreateAccountClick: () => void;
  handleOnLoginSubmit: (val: { email: string; password: string }) => void;
}
