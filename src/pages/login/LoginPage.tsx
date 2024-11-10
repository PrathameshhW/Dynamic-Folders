import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { lazy, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { envConfig } from "../../Config/env.config";
import { loginUser } from "./LoginApit";
import { ILoginLayoutProps } from "./LoginDto";

const LoginLayout = lazy(
  () => import(`../../peoples/${envConfig.orgName}/login/LoginLayout.tsx`)
);

const LoginFormInitialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();

  const { refetch: LoginUser } = useQuery({
    queryKey: ["login"],
    queryFn: loginUser,
    enabled: false,
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: LoginFormInitialValues,
    validate: {
      email: isEmail("Please enter a valid email"),
      password: isNotEmpty("Password is required"),
    },
  });

  const handleOnLoginSubmit = async (val: {
    email: string;
    password: string;
  }) => {
    setButtonLoading(true);
    try {
      const res = await LoginUser();

      const user = res.data?.find(
        (user) => user.email === val.email && user.password === val.password
      );

      if (!user) {
        toast.error("User not found");
        setButtonLoading(false);
        return;
      }

      toast.success("User logged in successfully");
      localStorage.setItem("token", user.token);
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }

    setButtonLoading(false);
  };

  const onCreateAccountClick = () => {
    navigate("/register");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const props: ILoginLayoutProps = {
    form,
    onCreateAccountClick,
    handleOnLoginSubmit,
    buttonLoading,
  };

  return <LoginLayout {...props} />;
};

export default LoginPage;
