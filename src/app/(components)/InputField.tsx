"use client";
import React, { ChangeEvent, useEffect, useRef } from "react";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";
import IconStandard from "./IconStandard";
import { IconType } from "react-icons";

interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  icon: IconType | string;
  refInput?: React.LegacyRef<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  type,
  name,
  refInput,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center pl-15 rounded-2xl mb-10 w-full h-12 bg-slate-500">
      <IconStandard Icon={icon} size={24} color={"#1C1C1C"} />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        ref={refInput}
      />
    </div>
  );
};

export default InputField;

const InputFieldStyled = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  border-radius: 16px;
  background: rgba(240, 237, 255, 0.8);
  width: 364px;
  height: 52px;
  flex-shrink: 0;
  margin-bottom: 10px;
  input {
    color: #1c1c1c;
    font-family: "Poppins";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    padding-left: 10px;
    line-height: normal;
    border-style: none;
    background: rgba(240, 237, 255, 0.8);
    outline: none;
    width: 90%;
    height: 100%;
    &::placeholder {
      color: #1c1c1c;
      font-family: "Poppins";
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
