import Image from "next/image";
import { FC } from "react";

type Props = {
  imageUrl: any;
  ProfileClickHandler?: React.MouseEventHandler<HTMLDivElement>; //() => void
};

const AvatarProfilComponent: FC<Props> = ({
  imageUrl,
  ProfileClickHandler,
}) => {
  return (
    <div
      onClick={ProfileClickHandler}
      className="flex justify-center items-center rounded-full border-2
     border-white w-14 h-14 cursor-pointer"
    >
      <Image
        src={imageUrl}
        alt="profile"
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  );
};

export default AvatarProfilComponent;
