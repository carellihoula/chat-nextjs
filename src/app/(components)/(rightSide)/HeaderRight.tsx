import { FC } from "react";
import AvatarProfilComponent from "../AvatarProfilComponent";
import IconStandard from "../IconStandard";
import { FiMoreVertical } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const HeaderRight: FC = () => {
  return (
    <div className="flex items-center justify-between w-full py-2 px-4  bg-custom__header">
      <AvatarProfilComponent
        imageUrl={
          "https://storage.googleapis.com/netflixproject/assets/assets/Ellipse4.png"
        }
      />

      <div className="flex items-center gap-6">
        <IconStandard size={24} Icon={MdLocalPhone} />
        <IconStandard size={24} Icon={IoMdVideocam} />
        <IconStandard size={24} Icon={IoSearchOutline} />
        <IconStandard size={24} Icon={FiMoreVertical} />
      </div>
    </div>
  );
};

export default HeaderRight;
