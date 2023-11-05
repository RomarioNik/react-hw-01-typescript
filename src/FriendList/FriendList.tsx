import { Friend } from "./Friend";
import { List } from "./FriendList.styled";
import { FriendsData } from "../data";

interface Friends {
  friends: FriendsData[];
}

export const FriendList = ({ friends }: Friends) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
};
