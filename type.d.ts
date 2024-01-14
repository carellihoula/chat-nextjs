type Message = {
  receiver: UserType;
  sender: UserType;
  content: string;
  createdAt: string;
  updatedAt: string;
  isRead: boolean;
  id: number;
};

type UserType = {
  id?: number;
  username: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type Credentials = {
  email: string;
  password: string;
};
type Conversation = {
  conversationId: number;
  participants: number[];
  messages: Message[];
  unreadNumber: number;
};
