export type UserRole = "admin" | "member" | "viewer";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export type UserListResponse = {
  users: User[];
};
