import React, { FunctionComponent } from "react";
import Tabs from "../Tabs";
import {
  UserAvatar,
  UserCardContainer,
  UserCardLeft,
  UserCardRight,
  UserInfo,
  UserSocialLinks,
  UserInfoContainer
} from "./UserCard.style";

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
            <Tabs />
        </UserCardRight>
      </UserCardContainer>
    </>
  );
};

export default UserCard;
