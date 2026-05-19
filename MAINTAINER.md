# Maintainer Guide（管理員專用）

訪客無法在網頁上新增或刪除素材。所有列表內容**只**能透過修改程式碼更新。

## 快速步驟

1. 開啟 `src/data/defaultData.js`
2. 在對應陣列（`bgm` / `videos` / `memes` / `news`）新增或刪除物件
3. 每筆必須有唯一 `id`（例：`vid-4`）
4. 儲存後執行 `npm run dev` 預覽，或 `npm run build` 後部署

## 欄位參考

### videos

```js
{
  id: 'vid-unique',
  title: '顯示名稱',
  url: 'https://...',           // 必填
  thumbnail: 'https://...jpg',  // 選填，封面預覽
  tags: ['標籤'],
  license: 'Pexels Free',
  description: '說明',
  situation: '何時使用',
  resolution: '4K',
  format: 'MP4',
  createdAt: '2025-05-01',
}
```

### bgm / memes / news

見 `defaultData.js` 內現有範例。

## 調整 UI（選用）

| 目的 | 檔案 |
|------|------|
| 分頁版面 | `src/pages/VideosPage.jsx` 等 |
| 卡片樣式 | `src/components/videos/VideoCard.jsx` |
| 主題色 | `src/index.css`（`:root` 與 `[data-theme='dark']`） |
| 網站名稱 | `src/config/site.js` |

## 注意

- 已移除 `localStorage` 寫入，訪客不會覆蓋你的資料
- 表單元件（`*Form.jsx`）保留作欄位參考，應用程式不會載入
