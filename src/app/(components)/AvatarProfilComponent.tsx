import Image from "next/image";
import { FC } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

type Props = {
  imageUrl: any;
  ProfileClickHandler?: React.MouseEventHandler<HTMLDivElement>; //() => void
};

const AvatarProfilComponent: FC<Props> = ({
  imageUrl,
  ProfileClickHandler,
}) => {
  return (
    <IconProfilComponentStyled onClick={ProfileClickHandler}>
      <Image
        src={imageUrl}
        alt="profile"
        width={50}
        height={50}
        className="img"
      />
    </IconProfilComponentStyled>
  );
};
const IconProfilComponentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 2px solid #fff;
  width: 55px;
  cursor: pointer;
  .img {
    border-radius: 50px;
  }
`;

export default AvatarProfilComponent;
