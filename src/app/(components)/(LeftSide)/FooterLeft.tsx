import { FaLock } from "react-icons/fa";

const FooterLeft = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-[50px] gap-1.5 
    absolute bottom-0 bg-white border-t-2 border-solid border-[#E9EDEF]"
    >
      <FaLock color="#6B7C85" />
      <p className="font-work-sans text-sm">
        your personnal messages are{" "}
        <span className="text-[#55a8cd]">end-to-end encrypted</span>
      </p>
    </div>
  );
};

export default FooterLeft;
