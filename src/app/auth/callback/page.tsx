// src/app/auth/callback/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // SDKがURLの #access_token=... を自動で処理してセッションを確立する
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        // ログイン成功 → イベント一覧へ
        router.replace("/event-list");
      }
    });
  }, [router]);

  return <p>ログイン中...</p>;
}
