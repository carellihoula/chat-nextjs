import { FC } from "react";
import AvatarProfilComponent from "../AvatarProfilComponent";
import IconStandard from "../IconStandard";
import { LiaSmsSolid } from "react-icons/lia";
import { FiMoreVertical } from "react-icons/fi";
import { MdGroups } from "react-icons/md";

interface Props {
  ProfileClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

const HeaderLeft: FC<Props> = ({ ProfileClickHandler }) => {
  return (
    <div className="flex items-center justify-between bg-[#F0F2F5] w-full py-2 px-4 border-r border-gray-300">
      <AvatarProfilComponent
        imageUrl="https://storage.googleapis.com/netflixproject/assets/assets/profileIcon.png"
        ProfileClickHandler={ProfileClickHandler}
      />

      <div className="flex items-center gap-5">
        <IconStandard size={24} Icon={MdGroups} />
        <IconStandard
          size={24}
          Icon="https://storage.googleapis.com/netflixproject/assets/assets/StatusIcon.png"
        />
        <IconStandard size={24} Icon={LiaSmsSolid} />
        <IconStandard size={24} Icon={FiMoreVertical} />
      </div>
    </div>
  );
};

export default HeaderLeft;
