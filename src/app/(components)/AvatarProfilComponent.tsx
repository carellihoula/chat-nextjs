"use client";
import { showProfileAction } from "@/redux/showProfile/action";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  imageUrl: any;
  ProfileClickHandler?: React.MouseEventHandler<HTMLDivElement>; //() => void
};

const AvatarProfilComponent: FC<Props> = ({ imageUrl }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector(
    (state: RootState) => state.showProfileReducer.showProfile
  );
  //console.log(selector);
  const ProfileClickHandler = () => {
    dispatch(showProfileAction(true));
  };

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
