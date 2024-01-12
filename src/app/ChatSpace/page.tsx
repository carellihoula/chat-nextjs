import React from "react";
import LeftSideMain from "../(components)/(LeftSide)/LeftSideMain";
import RightSideMain from "../(components)/RightSideMain";
//import styles from "./chatspace.module.css";

function ChatMain() {
  return (
    <div className="flex w-full h-screen">
      <LeftSideMain />
      <RightSideMain />
    </div>
  );
}

export default ChatMain;
