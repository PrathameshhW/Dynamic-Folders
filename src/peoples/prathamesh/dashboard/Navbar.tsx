import { ActionIcon, Burger, Menu, Text } from "@mantine/core";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import {
  IMainContext,
  INavbarProps,
} from "../../../pages/dashboard/DashboardDto";
import { MainContext } from "../config/ThemeConfigProvider";
import Logo from "../media/logo.png";

const Navbar = (props: INavbarProps) => {
  const { handleThemeChange, theme }: IMainContext = useContext(MainContext);

  const { opened, toggle, onProfileMenuItemClick } = props;

  return (
    <div className="flex flex-row justify-between h-full items-center px-4">
      <div className="flex flex-row items-center">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <img src={Logo} alt="" className="w-28" />
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <ActionIcon onClick={() => handleThemeChange(theme)} size="lg">
          {theme === "light" ? <FaMoon /> : <FiSun />}
        </ActionIcon>

        <Menu shadow="md" width={100}>
          <Menu.Target>
            <img
              src="https://www.prathamesh.codes/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadshot.b5b5696d.webp&w=256&q=75"
              alt=""
              className="size-12 cursor-pointer"
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              color="red"
              onClick={() => onProfileMenuItemClick("/login")}
            >
              <div className="flex flex-row items-center justify-center gap-x-2">
                <Text>Logout</Text>
                <MdLogout />
              </div>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
