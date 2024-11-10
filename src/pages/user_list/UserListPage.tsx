import { useQuery } from "@tanstack/react-query";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { envConfig } from "../../Config/env.config";
import { getUserList } from "./UserListApi";
import { IUserListLayoutProps } from "./UserListDto";

const UserListLayout = lazy(
  () =>
    import(`../../peoples/${envConfig.orgName}/user_list/UsersListLayout.tsx`)
);

const UsersPage = () => {
  const navigate = useNavigate();
  const { data: userList, isLoading: userListFetching } = useQuery({
    queryKey: ["user-list"],
    queryFn: getUserList,
  });

  const handleAddNewUserClick = () => {
    navigate("/user");
  };

  const onEditProfileClick = (id: string) => {
    navigate(`/user?id=${id}`);
  };

  const props: IUserListLayoutProps = {
    userList,
    userListFetching,
    onEditProfileClick,
    handleAddNewUserClick,
  };

  return <UserListLayout {...props} />;
};

export default UsersPage;
