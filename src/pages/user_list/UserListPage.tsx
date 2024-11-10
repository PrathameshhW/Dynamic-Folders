import { lazy } from "react";
import { envConfig } from "../../Config/env.config";

const UserListLayout = lazy(
  () =>
    import(`../../peoples/${envConfig.orgName}/user_list/UsersListLayout.tsx`)
);

const UsersPage = () => {
  return <UserListLayout />;
};

export default UsersPage;
