// 相対パスの添付ファイルURLを、表示用にそのまま使える形式へ正規化する。
export const normalizeAssetUrl = (url: string): string => {
  if (!url) {
    return "";
  }

  if (
    /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(url) ||
    url.startsWith("//") ||
    url.startsWith("/")
  ) {
    return url;
  }

  return `/${url}`;
};
