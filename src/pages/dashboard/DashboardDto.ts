export interface Theme {
  theme: "light" | "dark";
}

export interface IMainContext {
  handleThemeChange: (val: "light" | "dark") => void;
  theme: "light" | "dark";
}

export interface INavbarProps {
  opened: boolean;
  toggle: () => void;
  onProfileMenuItemClick: (val: string) => void;
}

export interface ISidebarMenuItem {
  label: string;
  link: string;
  icon: string | any;
  type: string;
}
