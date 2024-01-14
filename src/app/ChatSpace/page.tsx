import React from "react";
import LeftSideMain from "../(components)/(LeftSide)/LeftSideMain";
import RightSideOfMain from "../(components)/(rightSide)/RightSideOfMain";
//import styles from "./chatspace.module.css";

function ChatMain() {
  return (
    <div className="flex w-full h-screen">
      <LeftSideMain />
      <RightSideOfMain />
    </div>
  );
}

export default ChatMain;
