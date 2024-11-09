import {
  Anchor,
  Button,
  Card,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import { ILoginLayoutProps } from "../../../pages/login/LoginDto";
import LoginImage from "../media/login/login.jpg";

const LoginLayout = (props: ILoginLayoutProps) => {
  const { form, onCreateAccountClick, handleOnLoginSubmit, buttonLoading } =
    props;

  return (
    <div className="flex px-4 sm:px-0 sm:flex-row w-full">
      <div className="h-screen flex flex-col items-center justify-center w-full md:w-1/2">
        <div>
          <Title ta="center">Welcome back!</Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor size="sm" component="button" onClick={onCreateAccountClick}>
              Create account
            </Anchor>
          </Text>
        </div>

        <Card
          withBorder
          shadow="md"
          mx="auto"
          p={30}
          mt={30}
          radius="md"
          className="w-full sm:w-2/3"
        >
          <form
            onSubmit={form.onSubmit((values) => {
              form.validate();
              if (form.isValid()) {
                handleOnLoginSubmit(values);
              }
            })}
          >
            <TextInput
              required
              label="Email"
              placeholder="you@mantine.dev"
              {...form.getInputProps("email")}
              key={form.key("email")}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              mt="md"
              autoComplete="off"
              {...form.getInputProps("password")}
              key={form.key("password")}
            />

            <Button fullWidth mt="xl" type="submit" loading={buttonLoading}>
              Sign in
            </Button>
          </form>
        </Card>
      </div>
      <div className="h-screen w-1/2 sm:block hidden">
        <img src={LoginImage} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LoginLayout;
