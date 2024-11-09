import {
  Anchor,
  Button,
  Card,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import { IRegisterLayoutProps } from "../../../pages/register/RegisterDto";
import RegisterImage from "../media/register/register.jpg";

const RegisterLayout = (props: IRegisterLayoutProps) => {
  const { form, handleRegisterSubmit, registerPending, onLoginClick } = props;

  return (
    <div className="flex px-4 sm:px-0 sm:flex-row w-full">
      <div className="h-screen flex flex-col items-center justify-center w-full md:w-1/2">
        <div>
          <Title ta="center">Welcome!</Title>
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
                handleRegisterSubmit(values);
              }
            })}
          >
            <TextInput
              required
              label="Name"
              placeholder="John Doe"
              {...form.getInputProps("name")}
              key={form.key("name")}
            />

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
              placeholder="*********"
              {...form.getInputProps("password")}
              key={form.key("password")}
            />

            <PasswordInput
              required
              label="Confirm Password"
              placeholder="*********"
              {...form.getInputProps("cpassword")}
              key={form.key("cpassword")}
            />

            <Button fullWidth mt="xl" type="submit" loading={registerPending}>
              Sign in
            </Button>
          </form>

          <Text c="dimmed" size="sm" ta="center" className="mt-6">
            Already have an account?{" "}
            <Anchor size="sm" component="button" onClick={onLoginClick}>
              Login
            </Anchor>
          </Text>
        </Card>
      </div>

      <div className="h-screen w-1/2 hidden md:block">
        <img
          src={RegisterImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterLayout;
