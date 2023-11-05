import { Tab, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Profile } from "../Profile";
import { Statistics } from "../Statistics";
import { FriendList } from "../FriendList";
import { TransactionHistory } from "../TransactionHistory";
import { Container, TabsStyled, TabPanelStyled } from "./App.styled";
// data
import { user, data, friends, transactions } from "../data";

// TabPanelStyled.tabsRole = "TabPanel";

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <Container>
      <TabsStyled selectedTabClassName="tabHead">
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Statistics</Tab>
          <Tab>FriendList</Tab>
          <Tab>TransactionHistory</Tab>
        </TabList>

        <TabPanelStyled>
          <Profile
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
          />
        </TabPanelStyled>

        <TabPanelStyled>
          <Statistics title="Upload stats" data={data} />
        </TabPanelStyled>

        <TabPanelStyled>
          <FriendList friends={friends} />
        </TabPanelStyled>

        <TabPanelStyled>
          <TransactionHistory items={transactions} />
        </TabPanelStyled>
      </TabsStyled>
    </Container>
  );
};
