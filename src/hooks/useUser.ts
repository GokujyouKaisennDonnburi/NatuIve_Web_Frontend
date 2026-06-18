"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchUsers } from "@/services/user";
import type { User } from "@/types/user";

type UseUserState = {
  users: User[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

export function useUser(): UseUserState {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const nextUsers = await fetchUsers();
      setUsers(nextUsers);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error ? caughtError.message : "Unknown error",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadUsers();
  }, [loadUsers]);

  return {
    users,
    isLoading,
    error,
    refetch: loadUsers,
  };
}
