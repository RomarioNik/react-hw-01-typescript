interface Stats {
  followers: number;
  views: number;
  likes: number;
}

export interface UserData {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: Stats;
}

export const user: UserData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
