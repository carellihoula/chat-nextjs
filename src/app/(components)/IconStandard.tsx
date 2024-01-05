import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
//import { LiaSmsSolid } from "react-icons/lia";
import { IconType } from "react-icons";

type IconStandardProps = {
  Icon: IconType | string;
  size?: number;
  color?: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
};
const IconStandard: FC<IconStandardProps> = ({
  Icon,
  size,
  color = "#54656F",
  handleClick,
}) => {
  return (
    <IconStandardStyled onClick={handleClick}>
      {typeof Icon === "string" ? (
        <Image src={Icon} alt="imageIcon" width={size} height={size} />
      ) : (
        Icon && <Icon size={size} color={color} />
      )}
    </IconStandardStyled>
  );
};

const IconStandardStyled = styled.div``;

export default IconStandard;