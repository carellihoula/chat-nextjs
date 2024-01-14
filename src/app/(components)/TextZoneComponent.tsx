//import React from 'react'
"use client";
import IconStandard from "./IconStandard";
import { MdPhotoCamera } from "react-icons/md";
import { FC, useState } from "react";

interface ComponentProps {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleResizeHeight: React.FormEventHandler<HTMLTextAreaElement>;
  textAreaHeight: string | number;
}

const TextZoneComponent: FC<ComponentProps> = ({
  value,
  handleChange,
  handleResizeHeight,
  textAreaHeight,
}) => {
  return (
    <div className="flex items-center w-[70%] h-[50px] gap-2.5 pl-[10px] rounded-xl bg-white">
      <IconStandard Icon={MdPhotoCamera} size={24} />
      <textarea
        placeholder="type a message"
        value={value}
        onChange={handleChange}
        onInput={handleResizeHeight}
        className="flex items-center justify-center outline-none resize-none 
        pt-3 box-border overflow-hidden border-none rounded-10 text-16 h-[100%] w-[94%] 
        font-work-sans text-base font-medium 
         text-gray-700 "
      />
    </div>
  );
};

export default TextZoneComponent;
