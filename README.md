# NatuIve Web Frontend

Next.js 15 + React 19 + TypeScript 5 + Tailwind CSS 4 + Biome 2 + MSW 2 + shadcn/ui の土台です。Atomic Design を前提に、初心者チームでも追いやすい構成にしています。

## 前提

- Node.js 22 LTS
- Bun 1.2.21

## 使い方

```bash
bun install
bun run dev
```

## 品質チェック

```bash
bun run lint
bun run format:check
bun run check
```

## MSW

ブラウザ用の Service Worker は `bun run msw:init` で `public/mockServiceWorker.js` を生成できます。このリポジトリにはサンプルの handler と browser/server 設定を入れてあります。

## ディレクトリ方針

- `src/app` は App Router のページとレイアウト
- `src/components` は Atomic Design ベースの UI
- `src/components/ui` は shadcn/ui 系の再利用コンポーネント
- `src/services` は API 通信
- `src/types` は型定義
- `src/hooks` はカスタムフック
- `src/utils` は共通ユーティリティ
- `src/constants` は定数
- `src/mocks` は MSW の handler と起動処理

## 追加コンポーネント

shadcn/ui の追加コンポーネントは、`components.json` を使って CLI で追加できます。