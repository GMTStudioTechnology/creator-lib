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
        
        {/* 1. Main Top Bar */}
        <div className="flex items-center justify-between gap-3">
          {/* Left: Logo (Clicking it acts as a home button) */}
          <div 
            className="glass-nav flex items-center gap-2 px-4 py-2.5 shrink-0 cursor-pointer"
            onClick={() => { setActiveTab('home'); setMenuOpen(false); }}
          >
            <Library size={16} className="opacity-70" />
            <span className="text-sm font-medium">{SITE.nameZh}</span>
          </div>

          {/* Center: Desktop Navigation (Hidden on Mobile) */}
          <nav className="glass-nav hidden lg:flex items-center gap-1 px-2 py-1.5">
            {NAV_ITEMS.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`nav-link shrink-0 ${activeTab === tab.id ? 'nav-link-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right: Actions (Theme & Hamburger Menu) */}
          <div className="flex items-center gap-2 shrink-0">
            <button 
              type="button" 
              onClick={onToggleTheme} 
              className="theme-toggle glass-nav flex items-center justify-center p-2.5" 
              aria-label={isDark ? '淺色模式' : '深色模式'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* Hamburger Button (Hidden on Desktop) */}
            <button 
              type="button" 
              className="glass-nav flex items-center justify-center p-2.5 lg:hidden" 
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* 2. Mobile Dropdown Menu (Fixed border-radius issue) */}
        {menuOpen && (
          <nav className="glass-nav !rounded-2xl flex flex-col p-2 lg:hidden gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {NAV_ITEMS.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => { setActiveTab(tab.id); setMenuOpen(false); }}
                className={`nav-link text-left px-4 py-2.5 w-full justify-start rounded-xl ${
                  activeTab === tab.id ? 'nav-link-active' : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        )}

        {/* 3. Search Bar */}
        <div className="glass-nav flex items-center gap-3 px-5 py-3 max-w-3xl mx-auto w-full">
          <Search size={18} className="opacity-40 shrink-0" />
          <input
            type="search"
            placeholder="搜尋素材、標籤、描述…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-inherit placeholder:opacity-40 text-sm focus:outline-none w-full"
          />
        </div>

      </div>
    </header>
  );
}