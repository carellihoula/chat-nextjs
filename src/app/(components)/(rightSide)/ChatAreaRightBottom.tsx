"use client";
import TextZoneComponent from "../TextZoneComponent";
import IconStandard from "../IconStandard";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { BiSolidMicrophone } from "react-icons/bi";
import { VscSend } from "react-icons/vsc";
import { useState } from "react";

interface Props {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const ChatAreaRightBottom = () => {
  const [value, setValue] = useState<string>("");
  const [textAreaHeight, setTextAreaHeight] = useState<string | number>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setValue(e.target.value);
  };

  const handleResizeHeight = (e: React.UIEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight(e.currentTarget.scrollHeight);
  };

  console.log(value);

  return (
    <div className="flex items-center justify-center bg-[#F0F2F5] w-full py-5 border-t border-gray-300 absolute bottom-0">
      <div className="flex items-center gap-6 w-full justify-center">
        <IconStandard size={24} Icon={BsEmojiSmile} />
        <IconStandard size={24} Icon={GrAttachment} />
        <TextZoneComponent
          value={value}
          handleChange={handleChange}
          handleResizeHeight={handleResizeHeight}
          textAreaHeight={textAreaHeight}
        />
        {value ? (
          <VscSend size={24} Icon={BiSolidMicrophone} />
        ) : (
          <IconStandard size={24} Icon={BiSolidMicrophone} />
        )}
      </div>
    </div>
  );
};

export default ChatAreaRightBottom;
