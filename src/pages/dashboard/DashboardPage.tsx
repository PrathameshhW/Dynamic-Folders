import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { lazy } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { envConfig } from "../../Config/env.config";

const Navbar = lazy(
  () => import(`../../peoples/${envConfig.orgName}/dashboard/Navbar.tsx`)
);

const DashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [opened, { toggle }] = useDisclosure();

  const onMenuItemClick = (val: string) => {
    if (val == "/login") {
      localStorage.clear();
      navigate("/login");
    }
  };

  const NavbarProps = {
    opened,
    toggle,
    onMenuItemClick,
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Navbar {...NavbarProps} />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Link to="/dashboard1">Dashboard1</Link>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
        {location.pathname == "/" && <div>Footer</div>}
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardPage;
