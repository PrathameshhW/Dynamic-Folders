export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  profileImage: string;
}

export interface IUserListLayoutProps {
  userList: IUser[] | undefined;
  userListFetching: boolean;
  onEditProfileClick: (id: string) => void;
  handleAddNewUserClick: () => void;
}
