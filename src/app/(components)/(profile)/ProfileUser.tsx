import React, { FC, useEffect, useState } from "react";
import IconStandard from "../IconStandard";
import { IoArrowBack } from "react-icons/io5";
import EditProfileComponent from "./EditProfileComponent";
import { FaCamera } from "react-icons/fa";
import Image from "next/image";
import styles from "./styles/profile.module.css";

interface PropsStyled {
  isClicked: boolean;
}
interface PropsProfile {
  isClicked: boolean;
  handleClickBack: React.MouseEventHandler<HTMLDivElement>;
}

const ProfileUser: FC<PropsProfile> = ({ isClicked, handleClickBack }) => {
  const [imgHover, setImgHover] = useState<boolean>(false);
  const mouseOverHandler = () => {
    setImgHover(true);
  };
  const mouseLeaveHandler = () => {
    setImgHover(false);
  };
  return (
    <div
      className={`flex flex-col w-full h-[100vh] gap-6 bg-[#f0f2f5] 
    transition-transform duration-300 ease-in-out transform ${
      isClicked ? "translate-x-0" : "-translate-x-full"
    } absolute z-20`}
    >
      <div className="flex items-end bg-[#008069] h-32 p-4 w-full">
        <div className="flex items-center gap-4">
          <IconStandard
            Icon={IoArrowBack}
            size={24}
            color={"#FFF"}
            handleClick={handleClickBack}
          />
          <p className="text-white font-semibold font-work-sans text-2xl">
            Profile
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div
          className="relative w-[220px] h-[220px] rounded-[220px] cursor-pointer font-work-sans"
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Image
            src={
              "https://storage.googleapis.com/netflixproject/assets/assets/profile__default.jpg"
            }
            alt="profile"
            className=" rounded-[220px] hover:brightness-[70px]"
            width={220}
            height={220}
          />
          {imgHover && (
            <div
              className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 w-3/5 text-center text-white 
            text-sm transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
            >
              <IconStandard Icon={FaCamera} size={24} /> CHANGE PROFILE PHOTO
            </div>
          )}
        </div>
      </div>

      <EditProfileComponent label="Your name" value="carel" />

      <div className="px-5 py-2 text-gray-600 font-work-sans">
        <p>
          This is not your username or pin. This name will be visible to your
          CanoShop friends
        </p>
      </div>

      <EditProfileComponent label="About" value="ffffff" />
    </div>
  );
};

export default ProfileUser;
