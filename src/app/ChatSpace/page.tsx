"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import LeftSideMain from "../(components)/(LeftSide)/LeftSideMain";
import RightSideMain from "../(components)/RightSideMain";
type User = {
  email?: string;
  role?: string;
};
function ChatMain() {
  const { data: session, status } = useSession();

  return (
    <div className="flex w-full h-screen">
      <LeftSideMain />
      <RightSideMain />
    </div>
  );
}

export default ChatMain;
