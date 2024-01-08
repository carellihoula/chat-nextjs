"use client";
import { SessionProvider } from "next-auth/react";

import React, { FC } from "react";
interface Child {
  children: React.ReactNode;
}
const AuthProvider: FC<Child> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
