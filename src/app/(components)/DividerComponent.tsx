import React from "react";

type Props = {
  justifyBorder: "full" | "center" | "left" | "right";
};

const DividerComponent: React.FC<Props> = ({ justifyBorder }) => {
  return (
    <div
      className={`flex w-full ${
        justifyBorder === "left"
          ? "justify-end"
          : justifyBorder === "right"
          ? "justify-start"
          : "justify-center"
      }`}
    >
      <div
        className={`flex bg-[#E9EDEF] h-0.5 ${
          justifyBorder === "full"
            ? "w-full"
            : justifyBorder === "center"
            ? "w-[95%]"
            : "w-[85%]"
        }`}
      ></div>
    </div>
  );
};

export default DividerComponent;
