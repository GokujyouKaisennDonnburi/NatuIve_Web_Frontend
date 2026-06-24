// src/hooks/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { signInWithGoogle, signOut } from "@/services/auth";
import type { AuthSession } from "@/types/common";

export function useAuth() {
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    // 初期セッション確認
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession({ userId: session.user.id, token: session.access_token });
      }
    });

    // セッション変化を監視
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(
        session
          ? { userId: session.user.id, token: session.access_token }
          : null,
      );
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    session,
    isAuthenticated: session !== null,
    loginWithGoogle: signInWithGoogle,
    logout: signOut,
  };
}
