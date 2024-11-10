import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { lazy } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { envConfig } from "../../Config/env.config";
import { INavbarProps } from "./DashboardDto";

const Navbar = lazy(
  () => import(`../../peoples/${envConfig.orgName}/dashboard/Navbar.tsx`)
);

const SideBar = lazy(
  () => import(`../../peoples/${envConfig.orgName}/dashboard/Sidebar.tsx`)
);

const MainDashbaordLayout = lazy(
  () =>
    import(
      `../../peoples/${envConfig.orgName}/dashboard/MainDashbaordLayout.tsx`
    )
);

const sideMenuItems = [
  { label: "Dashboard", link: "/", icon: "", type: "MENU" },
  { label: "My Users", link: "/user_list", icon: "", type: "MENU" },

  { label: "Settings", link: "/settings", icon: "", type: "CONFIG" },
  { label: "Logout", link: "/login", icon: "", type: "CONFIG" },
];

const DashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [opened, { toggle }] = useDisclosure();

  const onProfileMenuItemClick = (val: string) => {
    if (val == "/login") {
      localStorage.clear();
      navigate("/login");
    }
  };

  const onSibebarMenuItemClick = (val: string) => {
    if (val == "/login") {
      modals.openConfirmModal({
        title: "Logout",
        children: "Are you sure you want to logout?",
        labels: { confirm: "Logout", cancel: "Cancel" },
        confirmProps: { color: "red" },
        onConfirm: () => {
          localStorage.clear();
          navigate("/login");
        },
      });
      return;
    }

    navigate(val);
    toggle();
  };

  const NavbarProps: INavbarProps = {
    opened,
    toggle,
    onProfileMenuItemClick,
  };

  const SidebarProps = {
    sideMenuItems,
    onSibebarMenuItemClick,
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

      <AppShell.Navbar w={250}>
        <SideBar {...SidebarProps} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
        {location.pathname == "/" && <MainDashbaordLayout />}
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardPage;
