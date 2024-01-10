import React from "react";
import HeaderLeft from "./HeaderLeft";

type Props = {};

function LeftSideMain({}: Props) {
  return (
    <div className=" w-1/3 h-full relative">
      <HeaderLeft />
    </div>
  );
}

export default LeftSideMain;
