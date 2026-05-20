import { Home } from 'lucide-react';
import { SITE } from '../../config/site';

export default function Footer({ onHome }) {
  return (
    <footer className="relative mt-12 sm:mt-16 pb-8 sm:pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Home Button */}
        <div className="relative flex justify-center">
          <button
            type="button"
            onClick={onHome}
            className="absolute -top-6 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full inverse-card flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            aria-label="回到首頁"
          >
            <Home size={20} strokeWidth={2} className="text-page sm:w-[22px] sm:h-[22px]" />
          </button>
        </div>

        {/* Outer container: Added rounded-3xl to replace pill shape style */}
        <div className="glass-nav rounded-3xl px-4 sm:px-10 py-8 pt-10 sm:pt-12">
          
          {/* Inner container: Changed sm:rounded-full to sm:rounded-2xl */}
          <div className="rounded-2xl sm:rounded-2xl border border-[var(--panel-border)] p-5 sm:px-8 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-4 text-center sm:text-left bg-[var(--page-bg)]/30">
            
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-[10px] sm:text-xs opacity-50 uppercase tracking-widest mb-1">Open Resource</p>
              <p className="text-sm font-semibold">{SITE.nameZh}</p>
            </div>

            {/* Vertical divider on desktop, horizontal divider on mobile */}
            <div className="hidden sm:block w-px h-8 bg-[var(--panel-border)]" aria-hidden />
            <div className="sm:hidden w-16 h-px bg-[var(--panel-border)] opacity-50" aria-hidden />

            <div className="flex flex-col items-center sm:items-start">
              <p className="text-[10px] sm:text-xs opacity-50 uppercase tracking-widest mb-1">Categories</p>
              <p className="text-xs sm:text-sm font-semibold text-page-muted">BGM · Video · Meme · News</p>
            </div>
          </div>
          
          <p className="text-center text-[10px] sm:text-xs opacity-40 mt-6 sm:mt-8 px-4">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}