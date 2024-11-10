import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { lazy, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { envConfig } from "../../Config/env.config";
import { addNewUser, getUserById, updateUserById } from "./AddEditUserApi";
import { IAddEditUser, IAddEditUserLayoutProps } from "./AddEditUserDto";

const AddEditUserLayout = lazy(
  () => import(`../../peoples/${envConfig.orgName}/user/AddEditUserLayout.tsx`)
);

const AddEditUserPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const addUserForm = useForm<IAddEditUser>({
    mode: "uncontrolled",
    validate: {
      name: isNotEmpty("Name is required"),
      email: isEmail("Enter valid email"),
      password: (password) => {
        if (password.length < 6) {
          return "Password must be at least 6 characters";
        }
        return isNotEmpty("Password is required")(password);
      },
    },
  });

  const { refetch: getUser, isFetching: getUserFetching } = useQuery({
    queryKey: ["getUserById", id],
    queryFn: () => getUserById(id!),
    enabled: false,
  });

  const { mutateAsync: updateUser, isPending: updateUserPending } = useMutation(
    {
      mutationKey: ["updateUser", id],
      mutationFn: (data: IAddEditUser) => updateUserById(id!, data),
    }
  );

  const { mutateAsync: registerNewUser, isPending: registerPending } =
    useMutation({
      mutationKey: ["createUser"],
      mutationFn: addNewUser,
    });

  const fetchUserData = async () => {
    try {
      const res = await getUser();
      if (!res.data) return;

      // Set the form values using the fetched data
      addUserForm.setValues(res.data);
      toast.success("User fetched successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleOnSubmit = async (formValues: IAddEditUser) => {
    try {
      await (id ? updateUser(formValues) : registerNewUser(formValues));
      toast.success(`User ${id ? "updated" : "created"} successfully`);
      navigate("/user_list");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (id) {
      fetchUserData();
    }
  }, [id]);

  const props: IAddEditUserLayoutProps = {
    form: addUserForm,
    getUserFetching,
    handleOnSubmit,
    buttonLoading: updateUserPending || registerPending,
  };

  return <AddEditUserLayout {...props} />;
};

export default AddEditUserPage;
