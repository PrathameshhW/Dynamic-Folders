import { Button, Card, Loader, Text, Title } from "@mantine/core";
import { MdOutlineAdd } from "react-icons/md";
import {
  IUser,
  IUserListLayoutProps,
} from "../../../pages/user_list/UserListDto";

const UsersListLayout = (props: IUserListLayoutProps) => {
  const {
    userList,
    userListFetching,
    onEditProfileClick,
    handleAddNewUserClick,
  } = props;

  if (userListFetching) return <Loader />;

  return (
    <div>
      <div className="mb-4 flex">
        <Button
          onClick={handleAddNewUserClick}
          leftSection={<MdOutlineAdd size={20} />}
        >
          Add new User
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full">
        {userList?.map((item) => (
          <ProfileCard
            card={item}
            onEditProfileClick={onEditProfileClick}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersListLayout;

const ProfileCard = ({
  card,
  onEditProfileClick,
}: {
  card: IUser;
  onEditProfileClick: (id: string) => void;
}) => {
  return (
    <Card className="shadow-md w-full sm:w-[300px] flex flex-col items-center justify-between ">
      <div className="flex items-center flex-col gap-y-2">
        <img
          src={card.profileImage}
          alt=""
          className="w-[150px] h-[150px] rounded-full object-cover"
        />
        <Title className="text-center">{card.name}</Title>
        <Text className="text-center">{card.email}</Text>
      </div>
      <div className="flex w-full gap-x-2 mt-4">
        <Button className="w-full" onClick={() => onEditProfileClick(card.id)}>
          Edit Profile
        </Button>
      </div>
    </Card>
  );
};
