"use client";
import { createContext, FC, useContext, useState } from "react";
import React from "react";

type ProfileContextType = {
  showProfile: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileContext = createContext<ProfileContextType | undefined>({
  showProfile: false,
  setShowProfile: () => false,
});

export const ProfileProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);

  return (
    <ProfileContext.Provider value={{ showProfile, setShowProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
