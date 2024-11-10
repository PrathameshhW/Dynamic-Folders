import { Button, Loader, PasswordInput, TextInput } from "@mantine/core";
import BackButton from "../../../components/BackButton/BackButton";
import { IAddEditUserLayoutProps } from "../../../pages/user/AddEditUserDto";

const AddEditUserLayout = (props: IAddEditUserLayoutProps) => {
  const { form, getUserFetching, handleOnSubmit, buttonLoading } = props;

  if (getUserFetching) return <Loader />;

  return (
    <div>
      <BackButton path="/user_list" />

      <form
        onSubmit={form.onSubmit((values) => {
          form.isValid();
          if (form.isValid()) handleOnSubmit(values);
        })}
        className="md:w-1/2 w-full space-y-4 mt-4"
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
          placeholder="jW2tM@example.com"
          {...form.getInputProps("email")}
          key={form.key("email")}
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Your password"
          {...form.getInputProps("password")}
          key={form.key("password")}
        />

        <div className="w-full flex justify-end">
          <Button type="submit" className="mt-4" loading={buttonLoading}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEditUserLayout;
