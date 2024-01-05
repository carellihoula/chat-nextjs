type User = {
  username: string;
  email: string;
  password: string;
};

type Message = {
  receiver: User;
  sender: User;
  content: string;
  createdAt: string;
  updatedAt: string;
};
