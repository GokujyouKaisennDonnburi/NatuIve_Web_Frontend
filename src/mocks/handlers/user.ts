import { HttpResponse, http } from "msw";

const sampleUsers = [
  {
    id: "user-1",
    name: "Aoi Tanaka",
    email: "aoi@example.com",
    role: "admin",
  },
  {
    id: "user-2",
    name: "Ren Sato",
    email: "ren@example.com",
    role: "member",
  },
  {
    id: "user-3",
    name: "Mina Suzuki",
    email: "mina@example.com",
    role: "viewer",
  },
];

export const userHandlers = [
  // 既存のユーザー一覧取得モック
  http.get("/api/users", () => {
    return HttpResponse.json({ users: sampleUsers });
  }),
];
