import { isNotEmpty, useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import { lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { envConfig } from "../../Config/env.config";
import { login } from "./LoginApit";
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

  const { data: usersData, refetch: LoginUser } = useQuery({
    queryKey: ["login"],
    queryFn: login,
    enabled: false,
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: LoginFormInitialValues,
    validate: {
      email: isNotEmpty("Email is required"),
      password: isNotEmpty("Password is required"),
    },
  });

  const handleOnLoginSubmit = async (val: {
    email: string;
    password: string;
  }) => {
    try {
      const res = await LoginUser();

      const user = res.data?.find(
        (user) => user.email === val.email && user.password === val.password
      );

      if (user) {
        localStorage.setItem("token", user.token);
        navigate("/dashboard");
      }
    } catch (error) {}
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
  };

  return <LoginLayout {...props} />;
};

export default LoginPage;
