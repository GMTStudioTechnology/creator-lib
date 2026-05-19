/**
 * ═══════════════════════════════════════════════════════════
 *  管理員專用：所有素材僅在此檔案維護
 *  修改後執行 npm run dev 或重新部署即可
 * ═══════════════════════════════════════════════════════════
 */
export const defaultData = {
  bgm: [
    {
      id: 'bgm-1',
      title: 'Poema 2',
      artist: 'Peritune',
      url: 'https://peritune.com/blog/2020/11/13/poema2/',
      mood: '放鬆',
      tags: ['中世紀', '背景音樂'],
      license: 'Creative Commons',
      description: '適合風景照與比較休閒類型影片使用',
      situation: '休閒類型',
      bpm: '115',
      duration: '影片',
      createdAt: '22020-11-13',
    }
  ],
  videos: [
    {
      id: 'vid-1',
      title: '這個是測試用影片，所以用我們自己的影片',
      url: 'https://www.youtube.com/watch?v=JmkylrsbnZY&t=28s',
      thumbnail: 'https://img.youtube.com/vi/JmkylrsbnZY/maxresdefault.jpg',
      tags: ['遊戲'],
      license: '我自己',
      description: '就...測試用',
      situation: '我們自己的影片',
      resolution: '1080p',
      format: 'YT',
      createdAt: '2026-05-16',
    },
  ],
  memes: [
    {
      id: 'meme-1',
      title: 'Are you sure about that?',
      url: 'https://youtu.be/6Lad7s-sLIU?si=45uaiYR0LUBGVdCr',
      tags: ['突然出現', '你要確', '搞笑'],
      license: 'YT @Runup100',
      description: '驚嚇後可放片段',
      situation: 'jumpscare ',
      origin: 'John Cena “Are you sure about that” meme ORIGINAL FULL VIDEO',
      createdAt: '2021-4-22',
    },
  ],
  news: [
    {
      id: 'news-1',
      title: '這個網站？！',
      type: '網站更新',
      url: '',
      summary: '創作者素材庫 By. @鴨旅葉行',
      tags: ['網站更新'],
      relevance: '可讓創作者們更方便找到素材',
      source: '鴨旅葉行工作室官方',
      date: '2026-05-19',
      createdAt: '2026-05-19',
    },
    
  ],
};
