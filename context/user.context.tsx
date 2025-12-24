"use client";

import { createContext, ReactNode, useState } from "react";

type UserType = {
  _id: string;
  email: string;
  role: string;
  name?: string;
} | null;

type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

/* ---------- Context ---------- */
export const UserContext = createContext<UserContextType | null>(null);

/* ---------- Provider ---------- */
const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(null);

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
