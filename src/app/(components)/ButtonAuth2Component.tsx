import { FC } from "react";
import styled from "styled-components";
import IconStandard from "./IconStandard";
import { IconType } from "react-icons";
import { signIn } from "next-auth/react";

interface Props {
  icon: IconType | string;
  label: string;
  handleAuth0: React.MouseEventHandler<HTMLDivElement>;
  color?: string;
}
const ButtonAuth2Component: FC<Props> = ({
  icon,
  label,
  handleAuth0,
  color,
}) => {
  return (
    <div
      onClick={handleAuth0}
      className="flex items-center justify-center gap-2 cursor-pointer rounded-2xl border
       border-black border-solid px-20 py-3 hover:bg-slate-200"
    >
      <IconStandard Icon={icon} size={24} color={color} />
      <div className="font-normal text-sm font-mono">
        Login with <span className="font-bold">{label}</span>
      </div>
    </div>
  );
};

export default ButtonAuth2Component;
