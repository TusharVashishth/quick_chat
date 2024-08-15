"use client";

import React from "react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

interface Props {
  children?: React.ReactNode;
}

export default function SessionProvider({ children }: Props) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
