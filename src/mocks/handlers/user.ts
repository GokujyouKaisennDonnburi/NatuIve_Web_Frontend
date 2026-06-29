import { HttpResponse, http } from "msw";

// ダミーの現在のユーザー情報
const sampleCurrentUser = {
  id: "user-1",
  email: "aoi@example.com",
  displayName: "Aoi Tanaka",
  avatarUrl: "https://example.com/avatar.jpg",
  createdAt: "2026-06-24T10:00:00Z",
  updatedAt: "2026-06-24T10:00:00Z",
};

// 認証トークンが有効かどうかをチェックする関数
const hasBearerToken = (authorizationHeader: string | null) =>
  Boolean(authorizationHeader?.startsWith("Bearer "));

// MSWのハンドラーを定義
export const userHandlers = [
  // 現在のユーザー情報取得モック
  http.get("/api/v1/me", ({ request }) => {
    // 認証トークンが無効な場合は401エラーを返す
    if (!hasBearerToken(request.headers.get("authorization"))) {
      return HttpResponse.json(
        {
          error: {
            code: "unauthorized",
            message: "認証トークンが無効です",
          },
        },
        { status: 401 },
      );
    }

    return HttpResponse.json(sampleCurrentUser);
  }),
];
