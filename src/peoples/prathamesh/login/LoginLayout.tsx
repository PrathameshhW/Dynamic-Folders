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

const LoginLayout = (props: ILoginLayoutProps) => {
  const { form, onCreateAccountClick, handleOnLoginSubmit } = props;

  return (
    <>
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
              label="Email"
              placeholder="you@mantine.dev"
              {...form.getInputProps("email")}
              key={form.key("email")}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              autoComplete="off"
              {...form.getInputProps("password")}
              key={form.key("password")}
            />

            <Button fullWidth mt="xl" type="submit">
              Sign in
            </Button>

            {/* <Dialog opened={true}>
              <Text>Hello world</Text>
            </Dialog> */}
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginLayout;
