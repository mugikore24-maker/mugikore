# フォント設定完了

## ✅ 実装完了

Webサイトのフォントを以下のように整理しました：

### フォント構成

1. **日本語**: Zen Maru Gothic
   - ウェイト: 300, 400, 500, 700, 900
   - 使用箇所: 日本語ページ全体、見出し

2. **英語**: Open Sans
   - ウェイト: 300, 400, 600, 700, 800
   - 使用箇所: 英語ページ、英語コンテンツ

### ファイル構成

- `lib/fonts.ts` - フォント定義の一元管理
- `tailwind.config.ts` - Tailwindフォント設定
- `app/layout.tsx` - ルートレイアウトでフォント適用
- `app/globals.css` - グローバルスタイル更新

### Tailwind CSS クラス

以下のフォントクラスが使用可能です：

- `font-ja` - Zen Maru Gothic（日本語用）
- `font-sans` - Open Sans（英語用）
- `font-display` - Zen Maru Gothic（見出し用）

### 変更内容

1. すべての `font-serif` を `font-display` に変更
2. Times New Roman、Georgia などのセリフフォントを削除
3. 英語ページ（`/en/*`、`/blog/en/*`）では Open Sans を優先
4. 日本語ページでは Zen Maru Gothic を使用

### レイアウト

- 日本語ページ: デフォルトで `font-ja`（Zen Maru Gothic）
- 英語ページ: `font-sans`（Open Sans）に切り替え
- 見出し: すべて `font-display`（Zen Maru Gothic）

すべてのフォント設定が完了し、適切に適用されています。
