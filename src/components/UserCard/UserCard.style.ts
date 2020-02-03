import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: auto;
  min-height: 490px;
  border-radius: 8px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 10px 14px -12px #777;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    height: auto;
  }
`;

export const UserCardLeft = styled.div`
  width: 30%;
  height: 480px;
  background: lightpink;

  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 240px;
  background: lightblue;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 240px;
  text-transform: uppercase;
`;

export const UserSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
`;

export const UserCardRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 66%;
  height: 480px;
  padding: 30px;
  background: lightgreen;
  text-transform: uppercase;
  box-sizing: border-box;

  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;
