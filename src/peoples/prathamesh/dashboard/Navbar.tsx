import { Burger, Menu, Text } from "@mantine/core";
import { MdLogout } from "react-icons/md";

interface INavbarProps {
  opened: boolean;
  toggle: () => void;
  onMenuItemClick: (val: string) => {};
}

const Navbar = (props: INavbarProps) => {
  const { opened, toggle, onMenuItemClick } = props;
  return (
    <div className="flex flex-row justify-between h-full items-center px-4">
      <div>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </div>
      <div className="flex flex-row items-center">
        <Menu shadow="md" width={100}>
          <Menu.Target>
            <img
              src="https://www.prathamesh.codes/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadshot.b5b5696d.webp&w=256&q=75"
              alt=""
              className="size-12 cursor-pointer"
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item color="red" onClick={() => onMenuItemClick("/login")}>
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
