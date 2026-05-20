import { useState } from 'react';
import { Heart, Bookmark, Share2, ArrowRight, Music, Film, Smile, Newspaper, Search, Clock, Sparkles, Database } from 'lucide-react';
import TimelineSection from '../components/home/TimelineSection';
import FeaturedCarousel from '../components/home/FeaturedCarousel';
import { SECTION_META } from '../config/navigation';
import { SITE } from '../config/site';

const QUICK_LINKS = [
  { id: 'bgm', icon: Music, ...SECTION_META.bgm },
  { id: 'videos', icon: Film, ...SECTION_META.videos },
  { id: 'memes', icon: Smile, ...SECTION_META.memes },
  { id: 'news', icon: Newspaper, ...SECTION_META.news },
];

export default function HomePage({ data = {}, onNavigate, searchQuery }) {
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(35);

  const stats = {
    bgm: data?.bgm?.length || 0,
    videos: data?.videos?.length || 0,
    memes: data?.memes?.length || 0,
    news: data?.news?.length || 0,
  };
  
  const totalItems = Object.values(stats).reduce((a, b) => a + b, 0);

  const recent = [
    ...(data?.bgm || []).map(i => ({ ...i, type: 'bgm' })),
    ...(data?.videos || []).map(i => ({ ...i, type: 'videos' })),
    ...(data?.memes || []).map(i => ({ ...i, type: 'memes' })),
    ...(data?.news || []).map(i => ({ ...i, type: 'news' })),
  ]
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
    .slice(0, 5);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in max-w-7xl mx-auto pb-12 overflow-x-hidden">
      
      {/* Global Search Alert */}
      {searchQuery && (
        <div className="inverse-card rounded-2xl p-4 flex items-center gap-3 animate-fade-in mx-4 sm:mx-0">
          <div className="p-2 bg-[var(--page-bg)] rounded-full text-[var(--page-text)] shrink-0">
            <Search size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-page">正在全站搜尋：「{searchQuery}」</p>
            <p className="text-xs text-page-muted">請點擊下方各分類卡片查看詳細結果。</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="glass-panel p-5 sm:p-10 min-h-[420px] flex flex-col lg:flex-row gap-8 relative z-10 overflow-hidden mx-4 sm:mx-0">
        {/* Abstract Background Element - Scaled down for mobile to prevent overflow */}
        <div className="absolute -top-12 -right-12 sm:-top-24 sm:-right-24 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex-1 relative z-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-white/80 flex items-center gap-2 bg-white/5">
                <Sparkles size={12} /> v0.1
              </span>
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest">{SITE.tagline}</span>
            </div>

            <div className="relative mb-8 inline-block max-w-full">
              {/* Scaled text: 5xl on mobile, 6xl on tablet, 7xl on desktop */}
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tighter break-words">
                CREATOR<br />LIBRARY
              </h1>
              {/* Adjusted badge position so it doesn't overflow the right edge on narrow phones */}
              <span className="absolute -bottom-4 right-0 sm:-bottom-2 sm:-right-4 inverse-card px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest -rotate-3 shadow-xl whitespace-nowrap">
                素材庫
              </span>
            </div>
          </div>

          {/* Media Player Aesthetic Controls */}
          <div className="glass-panel p-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 w-full sm:max-w-md mt-6 lg:mt-0">
            <div className="flex justify-between text-[10px] text-white/40 mb-2 font-mono uppercase">
              <span>System Status</span>
              <span>{totalItems} Assets Loaded</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={e => setProgress(Number(e.target.value))}
                className="flex-1 h-1.5 accent-white bg-white/20 rounded-full appearance-none cursor-pointer"
              />
              <div className="flex gap-2 shrink-0">
                <button type="button" onClick={() => setLiked(l => !l)} className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all ${liked ? 'bg-white text-black hover:bg-white/90' : 'border border-white/30 text-white/60 hover:text-white hover:bg-white/10'}`}>
                  <Heart size={14} fill={liked ? 'currentColor' : 'none'} />
                </button>
                <button type="button" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/30 text-white/60 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right: Context Card */}
        <div className="white-card p-6 sm:p-8 w-full lg:max-w-sm flex flex-col relative z-10 shadow-2xl justify-between group hover:scale-[1.02] transition-transform duration-500 mt-4 lg:mt-0">
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--page-bg)] flex items-center justify-center mb-4 sm:mb-6 text-[var(--page-text)]">
              <Database size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--inverse-text)' }}>{SITE.nameZh}</h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--inverse-muted)' }}>
              {SITE.description} 支援全站搜尋、分類篩選與一鍵開啟。本站為唯讀模式，確保列表穩定。
            </p>
          </div>
          <button type="button" onClick={() => onNavigate('bgm')} className="mt-6 sm:mt-8 w-full btn-dark py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 font-bold hover:gap-4 transition-all text-sm sm:text-base">
            開始探索 <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </section>

      {/* Consolidated Categories Grid */}
      <section className="px-4 sm:px-0">
        <div className="flex items-end justify-between mb-4 px-1 sm:px-2">
          <h2 className="section-title text-xl sm:text-2xl m-0">分類目錄</h2>
          <span className="text-xs sm:text-sm text-white/50 font-mono">Total: {totalItems}</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {QUICK_LINKS.map((link, i) => {
            const Icon = link.icon; 
            
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                style={{ animationDelay: `${(i + 1) * 100}ms` }} 
                className="glass-panel p-4 sm:p-6 text-left card-hover relative z-10 group flex flex-col justify-between min-h-[140px] sm:min-h-[160px] animate-fade-in"
              >
                <div className="flex justify-between items-start">
                  <div className="p-2 sm:p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                    <Icon size={20} className="sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xl sm:text-2xl font-display text-white">{stats[link.id]}</span>
                </div>
                <div className="mt-3 sm:mt-4">
                  <p className="font-bold text-white text-base sm:text-lg flex items-center gap-1 sm:gap-2">
                    {link.title} <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:block" />
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/50 mt-1 line-clamp-1">{link.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8 overflow-hidden">
          {/* Note: TimelineSection and FeaturedCarousel inside here might also need their own responsive tweaks! */}
          <TimelineSection />
          
          <section>
            <h2 className="section-title text-xl sm:text-2xl mb-4 px-1 sm:px-2">精選預覽</h2>
            <div className="inverse-card p-4 sm:p-6 border border-[var(--page-border)] shadow-xl overflow-hidden">
              <FeaturedCarousel sections={data} onNavigate={onNavigate} />
            </div>
          </section>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-6 sm:space-y-8">
          {recent.length > 0 && (
            <section className="glass-panel p-4 sm:p-6 relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4 sm:mb-6 text-white/80">
                <Clock size={18} className="sm:w-5 sm:h-5" />
                <h2 className="text-base sm:text-lg font-bold">最新收錄</h2>
              </div>
              <ul className="space-y-2 flex-1">
                {recent.map((item, idx) => (
                  <li key={`${item.id}-${idx}`} className="group">
                    <button
                      type="button"
                      onClick={() => onNavigate(item.type)}
                      className="w-full flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-colors text-left border border-transparent hover:border-white/10"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white/70 text-sm">
                        {SECTION_META[item.type]?.emoji || '📌'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-blue-200 transition-colors">
                          {item.title || 'Untitled'}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                          {item.type}
                        </p>
                      </div>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all text-white shrink-0 hidden sm:block" />
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}