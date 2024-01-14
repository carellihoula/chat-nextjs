import React from "react";
import AvatarProfilComponent from "../AvatarProfilComponent";
import styles from "./styles/UserConversation.module.css";

interface MessageComponentProps {
  name: string;
  message: string;
  unreadNumber: number;
  time: string;
  handleConversation?: React.MouseEventHandler<HTMLDivElement>;
}

const UserConversation: React.FC<MessageComponentProps> = ({
  name,
  message,
  unreadNumber,
  time,
  handleConversation,
}) => {
  const timer: string = new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div onClick={handleConversation} className={styles.container}>
      <div className="flex gap-2">
        <div>
          <AvatarProfilComponent imageUrl="https://storage.googleapis.com/netflixproject/assets/assets/profileIcon.png" />
        </div>
        <div className={styles.name_message_author}>
          <p className={styles.name}>{name}</p>
          <p className={styles.message}>{message}</p>
        </div>
      </div>

      <div className={styles.time_and_messages_unread}>
        <small className={styles.small}>{timer}</small>
        <p className={styles.p}>{unreadNumber}</p>
      </div>
    </div>
  );
};

export default UserConversation;
