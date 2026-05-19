export const NAV_ITEMS = [
  { id: 'home', label: '首頁', icon: 'Home' },
  { id: 'bgm', label: 'BGM', icon: 'Music' },
  { id: 'videos', label: '影片', icon: 'Film' },
  { id: 'memes', label: 'Meme', icon: 'Smile' },
  { id: 'news', label: '時事', icon: 'Newspaper' },
  { id: 'about', label: '關於', icon: 'Info' },
];

export const SECTION_META = {
  bgm: {
    title: 'BGM 音樂庫',
    subtitle: '無版權背景音樂 · 依氣氛分類收藏',
    emoji: '🎵',
    accent: 'accent-jade',
    storageKey: 'bgm',
  },
  videos: {
    title: '影片素材庫',
    subtitle: '過場、特效、空拍 · 剪輯必備',
    emoji: '🎬',
    accent: 'accent-ember',
    storageKey: 'videos',
  },
  memes: {
    title: 'Meme 梗圖庫',
    subtitle: '反應梗、情境梗 · 創作笑點來源',
    emoji: '😂',
    accent: 'accent-gold',
    storageKey: 'memes',
  },
  news: {
    title: '時事 & 活動',
    subtitle: '遊戲更新、平台動態 · 內容靈感',
    emoji: '📰',
    accent: 'accent-blue',
    storageKey: 'news',
  },
};
