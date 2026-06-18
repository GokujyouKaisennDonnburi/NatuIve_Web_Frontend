export type ApiListResponse<T> = {
  items: T[];
  total: number;
};

export type AuthSession = {
  userId: string;
  token: string;
};
