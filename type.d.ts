type Message = {
  receiver: User;
  sender: User;
  content: string;
  createdAt: string;
  updatedAt: string;
};

interface UserType {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

type Credentials = {
  email: string;
  password: string;
};
