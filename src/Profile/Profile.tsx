import {
  ProfileContainer,
  Description,
  Avatar,
  UserName,
  UserTag,
  Location,
  ListBlocks,
  ListItem,
  Label,
  Quantity,
} from "./Profile.styled";
import { UserData } from "../data";

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}: UserData) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <Location>{location}</Location>
      </Description>

      <ListBlocks>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </ListBlocks>
    </ProfileContainer>
  );
};
