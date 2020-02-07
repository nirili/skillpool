import React, { FunctionComponent } from "react";
// import Tabs from "../Tabs";
import Test from "../Test";
import {
  UserAvatar,
  UserCardContainer,
  UserCardLeft,
  UserCardRight,
  UserInfo,
  UserSocialLinks,
  UserInfoContainer
} from "./UserCard.style";

const tabs = [
  {
    id: 1,
    label: "about",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste blanditiis eligendi rerum autem corporis possimus? Aspernatur beatae omnis dolore corporis."
  },
  {
    id: 2,
    label: "skills",
    content:
      "Bacon ipsum dolor amet short loin spare ribs biltong tri-tip corned beef sausage t-bone prosciutto kevin alcatra bresaola pastrami ball tip rump pork loin."
  }
];

const UserCard: FunctionComponent<{}> = () => {
  return (
    <>
      <UserCardContainer>
        <UserCardLeft>
          <UserAvatar>
            <img src="/img/avatar.jpg" alt="user avatar" />
          </UserAvatar>
          <UserInfoContainer>
            <UserInfo>User-s lastname</UserInfo>
            <UserInfo>User-s firstname</UserInfo>
            <UserInfo>User-s email</UserInfo>
            <UserSocialLinks>linkedin - Github</UserSocialLinks>
          </UserInfoContainer>
        </UserCardLeft>
        <UserCardRight>
          {tabs.map(tab => (
            <Test
              key={tab.id}
              id={tab.id}
              label={tab.label}
              content={tab.content}
              isChecked={true}
            />
          ))}
        </UserCardRight>
      </UserCardContainer>
    </>
  );
};

export default UserCard;
