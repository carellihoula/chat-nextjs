import React from "react";
import styled from "styled-components";
import IconStandard from "../IconStandard";
import { MdEdit } from "react-icons/md";
import styles from "./profile.module.css";

interface EditProps {
  label: string;
  value?: string;
}

const EditProfileComponent: React.FC<EditProps> = ({ label, value }) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{label}</p>
      <div className={styles.profile__content}>
        <p className={styles.value}>{value}</p>
        <IconStandard Icon={MdEdit} size={18} />
      </div>
    </div>
  );
};

export default EditProfileComponent;
