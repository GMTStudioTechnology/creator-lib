import { 
  Database, Shield, Tag, Layers, 
  Sun, Moon, Code2, FileJson, 
  ArrowRight, Sparkles, Terminal 
} from 'lucide-react';
import { SITE } from '../config/site';
import { MANAGE_GUIDES, SEED_DATA_FILE } from '../config/manageGuide';

const FEATURES = [
  { icon: Database, title: '開放瀏覽', desc: '任何人都可以搜尋、篩選並開啟素材連結，無需註冊。' },
  { icon: Tag, title: '標籤與搜尋', desc: '支援全站搜尋、分類篩選、排序與網格/列表檢視。' },
  { icon: Shield, title: '唯讀模式', desc: '訪客無法在網頁上新增或刪除項目，確保素材庫穩定。' },
  { icon: Layers, title: '分類清晰', desc: 'BGM、影片、Meme、時事各自獨立分頁，方便瀏覽。' },
];

export default function AboutPage({ onNavigate }) {
  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto pb-12">
      
      {/* 1. HERO SECTION - Added clear Call-to-Action */}
      <section className="glass-panel p-8 sm:p-12 relative z-10 flex flex-col items-center text-center">
        <span className="timeline-pill mb-4 inline-flex items-center gap-2">
          <Sparkles size={14} /> About the Library
        </span>
        <h1 className="hero-title text-4xl sm:text-6xl mb-4 font-extrabold tracking-tight">
          {SITE.nameZh}
        </h1>
        <p className="opacity-70 leading-relaxed max-w-2xl text-lg mb-8">
          {SITE.description}
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate?.(Object.values(MANAGE_GUIDES)[0].tab)}
            className="bg-[var(--page-text)] text-[var(--page-bg)] px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
          >
            開始探索 <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* 2. DYNAMIC BENTO GRID - Mixed features, categories, and theme */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Core Features (Takes up 2 columns) */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          {FEATURES.map((f, i) => (
            <article 
              key={f.title} 
              className={`inverse-card p-6 group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-fade-in-delay-${i + 1}`}
            >
              <div className="p-3 bg-white/5 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform">
                <f.icon size={24} className="text-page" />
              </div>
              <h3 className="font-bold text-page text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-page-muted leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>

        {/* Right Column: Navigation & Theme */}
        <div className="flex flex-col gap-6 md:col-span-1">
          
          {/* Quick Navigation Panel */}
          <section className="inverse-card p-6 flex-1 flex flex-col justify-center group hover:border-white/20 transition-all">
            <h2 className="font-bold text-page text-lg mb-4 flex items-center gap-2">
              <Layers size={20} /> 快速跳轉
            </h2>
            <div className="flex flex-col gap-2">
              {Object.values(MANAGE_GUIDES).map(g => (
                <button 
                  key={g.tab} 
                  type="button" 
                  onClick={() => onNavigate?.(g.tab)} 
                  className="pill-dark text-sm py-3 px-4 flex justify-between items-center hover:bg-white/10 transition-colors"
                >
                  {g.label} <ArrowRight size={14} className="opacity-50" />
                </button>
              ))}
            </div>
          </section>

          {/* Compact Theme Toggle Info */}
          <section className="inverse-card p-5 group">
            <h2 className="font-bold text-page text-sm mb-3 opacity-80">外觀主題</h2>
            <div className="flex items-center justify-between p-3 rounded-xl border border-[var(--page-border)] bg-[var(--panel-bg)]">
               <div className="flex items-center gap-2">
                 <Sun size={16} className="text-page" />
                 <span className="text-xs font-semibold">淺色 / 深色</span>
                 <Moon size={16} />
               </div>
               <span className="text-[10px] opacity-50 border border-white/20 px-2 py-1 rounded">使用頂部切換</span>
            </div>
          </section>
        </div>
      </div>

      {/* 3. MAINTAINER SECTION - Styled like a Terminal */}
      <section className="bg-[#0D1117] border border-[#30363D] rounded-2xl p-6 relative z-10 overflow-hidden mt-8">
        <div className="absolute top-0 left-0 w-full h-8 bg-[#161B22] border-b border-[#30363D] flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-[#8B949E] text-xs font-mono ml-2">maintainer-guide.sh</span>
        </div>
        
        <div className="pt-8">
          <div className="flex items-center gap-2 mb-4 text-[#58A6FF]">
            <Terminal size={20} />
            <h2 className="font-bold text-lg">管理員資料維護指南</h2>
          </div>
          <p className="text-sm text-[#8B949E] mb-5 leading-relaxed">
            網頁端為唯讀模式。請直接編輯 <code className="bg-[#1F2428] text-[#E6EDF3] px-1.5 py-0.5 rounded text-xs">{SEED_DATA_FILE}</code> 更新素材列表。
            詳細規範請參閱專案根目錄的 <code className="bg-[#1F2428] text-[#E6EDF3] px-1.5 py-0.5 rounded text-xs">MAINTAINER.md</code>。
          </p>
          
          <div className="bg-[#161B22] p-4 rounded-xl border border-[#30363D]">
            <ul className="text-sm text-[#7EE787] font-mono space-y-3">
              {Object.values(MANAGE_GUIDES).map(g => (
                <li key={g.dataKey} className="flex items-center gap-2">
                  <FileJson size={14} className="opacity-70" />
                  <span>{g.dataKey}</span>
                  <span className="text-[#8B949E]">→</span>
                  <span className="text-[#A5D6FF]">{g.pageFile}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="flex justify-center items-center gap-4 pt-6 opacity-50">
        <div className="h-px w-12 bg-current"></div>
        <p className="text-xs font-medium tracking-wider">
          v1.2 · {SITE.nameZh} · OPEN FOR EVERYONE
        </p>
        <div className="h-px w-12 bg-current"></div>
      </div>

    </div>
  );
}