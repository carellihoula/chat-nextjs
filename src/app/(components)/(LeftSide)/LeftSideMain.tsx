import React from "react";
import HeaderLeft from "./HeaderLeft";
import FooterLeft from "./FooterLeft";
import SearchBarComponent from "../SearchBarComponent";
import UserConversation from "./UserConversation";
import { IoFilterSharp } from "react-icons/io5";
import DividerComponent from "../DividerComponent";

type Props = {};

function LeftSideMain({}: Props) {
  return (
    <div className=" w-1/3 h-full relative">
      <HeaderLeft />
      <div className="flex gap-3 w-full justify-center items-center mt-5 mb-4">
        <SearchBarComponent />
        <IoFilterSharp color={"#54656F"} size={24} />
      </div>
      <DividerComponent justifyBorder="full" />
      <UserConversation
        name="carel"
        message="salut!"
        unreadNumber={10}
        time="2021-12-16T09:05:00Z"
      />
      <DividerComponent justifyBorder="left" />
      <UserConversation
        name="carel"
        message="salut!"
        unreadNumber={10}
        time="2021-12-16T09:05:00Z"
      />
      <DividerComponent justifyBorder="left" />
      <UserConversation
        name="carel"
        message="salut!"
        unreadNumber={10}
        time="2021-12-16T09:05:00Z"
      />
      <DividerComponent justifyBorder="left" />
      <FooterLeft />
    </div>
  );
}

export default LeftSideMain;
