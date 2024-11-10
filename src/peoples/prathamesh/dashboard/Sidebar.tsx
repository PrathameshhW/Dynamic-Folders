import { UnstyledButton } from "@mantine/core";
import { FaUsersCog } from "react-icons/fa";
import { MdDashboard, MdLogout, MdOutlineSettings } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { ISidebarMenuItem } from "../../../pages/dashboard/DashboardDto";

interface NavbarLinkProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?(): void;
  link?: string;
}

const NavbarLink = ({
  icon: Icon,
  label,
  active,
  onClick,
  link,
}: NavbarLinkProps) => {
  return (
    <UnstyledButton
      onClick={onClick}
      data-active={active || undefined}
      className={`flex flex-row w-full hover:bg-[#b4b3b3]/30 items-center p-4 gap-x-4 h-[45px]  transition-all ${
        active && link !== "/login"
          ? "bg-[#349aef] text-white hover:bg-[#349aef]/90  transition-all"
          : "bg-transparent"
      }`}
    >
      <Icon stroke={1.5} />
      {label}
    </UnstyledButton>
  );
};

const Sidebar = ({
  sideMenuItems,
  onSibebarMenuItemClick,
}: {
  sideMenuItems: ISidebarMenuItem[];
  onSibebarMenuItemClick: any;
  toggle: () => void;
}) => {
  const location = useLocation();

  const icons = [
    <MdDashboard />,
    <FaUsersCog />,
    <MdOutlineSettings />,
    <MdLogout />,
  ];

  const updatedSideMenuItems = sideMenuItems.map((item, index) => ({
    ...item,
    icon: icons[index].type,
  }));

  const MainItems = updatedSideMenuItems.filter((item) => item.type === "MENU");
  const ConfigItems = updatedSideMenuItems.filter(
    (item) => item.type === "CONFIG"
  );

  const links = MainItems.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={link.link === location.pathname}
      onClick={() => {
        onSibebarMenuItemClick(link.link);
      }}
    />
  ));

  const configLinks = ConfigItems.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={link.link === location.pathname}
      onClick={() => {
        onSibebarMenuItemClick(link.link);
      }}
    />
  ));

  return (
    <div className="flex flex-col justify-between h-full">
      <div>{links}</div>
      <div>{configLinks}</div>
    </div>
  );
};

export default Sidebar;
