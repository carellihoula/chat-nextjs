type Props = {
  isSender: boolean;
  message: string;
  time: string;
};

type MessageContentProps = {
  sender: boolean;
};

const MessageComponent: React.FC<Props> = ({ isSender, message, time }) => {
  return (
    <div
      className={`relative flex flex-row max-w-500 px-4 py-2 font-work-sans items-start gap-4 ml-n2 mb-4
      ${
        isSender
          ? "bg-white rounded-tl-[20px] rounded-tr-[2px] rounded-br-[20px] rounded-bl-[2px]"
          : "bg-[#d9fdd3] rounded-tl-[2px] rounded-tr-[20px] rounded-br-[2px] rounded-bl-[20px]"
      }
      
      `}
    >
      <p className="mr-5 font-bold">{message}</p>
      <small className="text-center absolute bottom-1 right-3">{time}</small>
    </div>
  );
};

export default MessageComponent;
