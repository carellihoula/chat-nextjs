import { FC } from "react";
import styled from "styled-components";
import AvatarProfilComponent from "../AvatarProfilComponent";
import IconStandard from "../IconStandard";
import { LiaSmsSolid } from "react-icons/lia";
import { FiMoreVertical } from "react-icons/fi";
import { MdGroups } from "react-icons/md";
import iconStatus from "@public//assets/StatusIcon.png";
import profileImage from "/assets/profile__default.jpg";

interface Props {
  ProfileClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

const HeaderLeft: FC<Props> = ({ ProfileClickHandler }) => {
  return (
    <NavLeftStyled>
      <AvatarProfilComponent
        imageUrl="https://storage.googleapis.com/netflixproject/assets/assets/profileIcon.png"
        ProfileClickHandler={ProfileClickHandler}
      />

      <IconDiv>
        <IconStandard size={24} Icon={MdGroups} />
        <IconStandard
          size={24}
          Icon="https://storage.googleapis.com/netflixproject/assets/assets/StatusIcon.png"
        />
        <IconStandard size={24} Icon={LiaSmsSolid} />
        <IconStandard size={24} Icon={FiMoreVertical} />
      </IconDiv>
    </NavLeftStyled>
  );
};

const NavLeftStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f2f5;
  width: 100%;
  height: auto;
  padding: 10px 20px;
  border-right: 1px solid #c9cdcf;
`;
const IconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default HeaderLeft;
