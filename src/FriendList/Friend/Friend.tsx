import { ListItem, Indikator, Avatar, UserName } from "./Friend.styled";
import { FriendsData } from "../../data";

export const Friend = ({ avatar, name, isOnline }: FriendsData) => {
  return (
    <ListItem>
      <Indikator $status={isOnline ? "green" : "red"}></Indikator>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </ListItem>
  );
};
