import { useState } from 'react';
import { Search, Menu, X, Sun, Moon, Library } from 'lucide-react';
import { NAV_ITEMS } from '../../config/navigation';
import { SITE } from '../../config/site';

export default function Header({ activeTab, setActiveTab, searchQuery, setSearchQuery, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 pt-4 pb-2 px-4 bg-page/95 backdrop-blur-md border-b border-[var(--page-border)]">
      <div className="max-w-7xl mx-auto space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <nav className="glass-nav flex items-center gap-0.5 px-2 py-1.5 flex-1 min-w-0 overflow-x-auto">
            <button type="button" className="nav-link flex items-center gap-1 shrink-0 lg:hidden" onClick={() => setMenuOpen(o => !o)}>
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            {NAV_ITEMS.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => { setActiveTab(tab.id); setMenuOpen(false); }}
                className={`nav-link shrink-0 ${menuOpen ? 'flex' : 'hidden'} lg:flex ${activeTab === tab.id ? 'nav-link-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <button type="button" onClick={onToggleTheme} className="theme-toggle" aria-label={isDark ? '淺色模式' : '深色模式'}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="glass-nav flex items-center gap-2 px-4 py-2.5 shrink-0">
            <Library size={16} className="opacity-70" />
            <span className="text-sm font-medium hidden sm:inline">{SITE.nameZh}</span>
          </div>
        </div>

        <div className="glass-nav flex items-center gap-3 px-5 py-3 max-w-3xl">
          <Search size={18} className="opacity-40 shrink-0" />
          <input
            type="search"
            placeholder="搜尋素材、標籤、描述…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-inherit placeholder:opacity-40 text-sm focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}
