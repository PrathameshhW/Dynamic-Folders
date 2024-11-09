import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { lazy, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { envConfig } from "../../Config/env.config";
import { registerUser } from "./RegisterApi";
import { IRegisterLayoutProps, IRegisterUser } from "./RegisterDto";
const RegisterLayout = lazy(
  () => import(`../../peoples/${envConfig.orgName}/register/RegisterLayout.tsx`)
);

const RegisterFormInitialValues: IRegisterUser = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const { isPending: registerPending, mutateAsync: RegisterUser } = useMutation(
    {
      mutationKey: ["registerUser"],
      mutationFn: registerUser,
    }
  );

  const registerForm = useForm<IRegisterUser>({
    mode: "uncontrolled",
    initialValues: RegisterFormInitialValues,
    validate: {
      name: isNotEmpty("Name is required"),
      email: isEmail("Enter valid email"),
      password: (password) => {
        if (password.length < 6) {
          return "Password must be at least 6 characters";
        }
        return isNotEmpty("Password is required")(password);
      },
      cpassword: (cpassword: string): string => {
        if (cpassword.length < 6) {
          return "Password must be at least 6 characters";
        }

        if (cpassword !== registerForm.getValues().password) {
          return "Password and Confirm Password should be same";
        }

        return isNotEmpty("Password is required")(cpassword) as string;
      },
    },
  });

  const handleRegisterSubmit = async (formValues: IRegisterUser) => {
    try {
      const newFormValues = { ...formValues } as Partial<IRegisterUser>;
      delete newFormValues.cpassword;

      const res = await RegisterUser(newFormValues);

      if (res.token) {
        navigate("/login");
        toast.success("User registered successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const onLoginClick = () => {
    navigate("/login");
  };

  const props: IRegisterLayoutProps = {
    form: registerForm,
    handleRegisterSubmit,
    registerPending,
    onLoginClick,
  };

  return <RegisterLayout {...props} />;
};

export default RegisterPage;
