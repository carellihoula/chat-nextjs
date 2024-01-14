import { FC, useEffect, useRef } from "react";
import HeaderRight from "./HeaderRight";
import ChatAreaRightBottom from "./ChatAreaRightBottom";
import MessageComponent from "../MessageComponent";
import { messages1 } from "@/utils/utils";

interface ConversationAreaProps {
  isSender: boolean;
}

const RightSideOfMain: FC = () => {
  return (
    <div className="flex flex-col h-screen relative w-2/3 bg-whatsapp ">
      <HeaderRight />
      <div className="flex flex-col px-20 py-40 overflow-y-auto mb-25">
        {messages1.map((msg, index) => {
          const time = new Date(msg.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            <div
              key={index}
              className={`flex ${msg.sender ? "self-start" : "self-end"}`}
            >
              <MessageComponent
                isSender={false}
                message={msg.content}
                time={time}
              />
            </div>
          );
        })}
      </div>
      <ChatAreaRightBottom />
    </div>
  );
};

export default RightSideOfMain;
