import { FC } from "react";
import styled from "styled-components";
interface ButtonProps {
  label: string;
}
const SubmitButtonLoginRegister: FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className="flex self-center items-center justify-center rounded-2xl 
    p-4 text-sm cursor-pointer font-bold font-mono border-none text-white
    bg-cyan-400 shadow-cyan-500/50"
    >
      {label}
    </button>
  );
};

export default SubmitButtonLoginRegister;
