"use client";
import React, { ChangeEvent, useEffect, useRef } from "react";
import styled from "styled-components";
import { FiUser } from "react-icons/fi";
import IconStandard from "../IconStandard";
import { IconType } from "react-icons";
import styles from "./inputField.module.css";

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
    <div className={styles.container}>
      <IconStandard Icon={icon} size={24} color={"#1C1C1C"} />
      <input
        className={styles.input}
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
