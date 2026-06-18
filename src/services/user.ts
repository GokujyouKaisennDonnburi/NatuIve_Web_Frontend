import type { User, UserListResponse } from "@/types/user";

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch("/api/users", {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = (await response.json()) as UserListResponse;
  return data.users;
}
