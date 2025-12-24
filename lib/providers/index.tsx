"use client";

import UserContextProvider from "@/context/user.context";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default Provider;
