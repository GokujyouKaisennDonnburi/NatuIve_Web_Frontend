"use client";

import { useState } from "react";
import { signIn, signOut } from "@/services/auth";
import type { AuthSession } from "@/types/common";

type UseAuthState = {
  session: AuthSession | null;
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  logout: () => Promise<void>;
};

export function useAuth(): UseAuthState {
  const [session, setSession] = useState<AuthSession | null>(null);

  return {
    session,
    isAuthenticated: session !== null,
    login: async (email: string) => {
      const nextSession = await signIn(email);
      setSession(nextSession);
    },
    logout: async () => {
      await signOut();
      setSession(null);
    },
  };
}
