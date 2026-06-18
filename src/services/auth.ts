import type { AuthSession } from "@/types/common";

export async function signIn(email: string): Promise<AuthSession> {
  return {
    userId: `user-${email.split("@")[0] ?? "demo"}`,
    token: "demo-session-token",
  };
}

export async function signOut(): Promise<void> {
  return;
}
