const TIMELINE = [
  {
    range: 'BGM · 音樂',
    items: [
      { label: '放鬆氛圍', text: '直播掛機、閒聊過場時使用 Lo-Fi 或輕爵士，避免搶走語音焦點。' },
      { label: '史詩高潮', text: 'Boss 戰、精彩擊殺剪輯搭配史詩編曲，注意 CC 授權標註。' },
      { label: '輕快探索', text: '8-bit 或像素風 BGM 適合沙盒、探索類內容的輕鬆段落。' },
    ],
  },
  {
    range: '影片 · Meme',
    items: [
      { label: '過場空拍', text: 'Pexels、Mixkit 等免費素材站，4K 空拍常用於片頭與轉場。' },
      { label: 'VFX 疊加', text: '煙霧、火花等黑底素材可疊加於遊戲畫面增強視覺。' },
      { label: '梗圖反應', text: '記錄梗的起源與使用情境，避免觀眾看不懂笑點。' },
    ],
  },
  {
    range: '時事 · 靈感',
    items: [
      { label: '遊戲更新', text: '版本更新速覽是穩定流量來源，記錄官方連結與摘要。' },
      { label: '平台政策', text: 'YouTube、Twitch 政策變動可能影響收益，及時追蹤。' },
      { label: '創作切入', text: '每則時事附上「可以拍什麼」，把新聞變成腳本靈感。' },
    ],
  },
];

export default function TimelineSection() {
  return (
    <section className="glass-panel p-6 sm:p-8 relative z-10">
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        <span className="timeline-pill">素材管理指南</span>
        <span className="timeline-pill opacity-60">1 — 3</span>
        <span className="timeline-pill opacity-60">4 — 6</span>
      </div>

      <div className="grid md:grid-cols-3 gap-0 relative z-10">
        {TIMELINE.map((col, ci) => (
          <div key={col.range} className={`px-4 sm:px-6 py-4 ${ci > 0 ? 'md:border-l border-white/10' : ''}`}>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">{col.range}</h3>
            <ul className="space-y-5">
              {col.items.map((item, i) => (
                <li key={item.label}>
                  <p className="text-xs font-semibold text-white/90 mb-1">
                    <span className="text-white/30 mr-2">{ci * 3 + i + 1}.</span>
                    {item.label}
                  </p>
                  <p className="text-xs text-white/50 leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 relative z-10">
        <span className="timeline-pill text-[10px]">Creator Library · Open Resource</span>
      </div>
    </section>
  );
}
