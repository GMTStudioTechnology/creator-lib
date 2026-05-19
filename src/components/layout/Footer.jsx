import { Home } from 'lucide-react';
import { SITE } from '../../config/site';

export default function Footer({ onHome }) {
  return (
    <footer className="relative mt-16 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex justify-center">
          <button
            type="button"
            onClick={onHome}
            className="absolute -top-6 z-10 w-14 h-14 rounded-full inverse-card flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="回到首頁"
          >
            <Home size={22} strokeWidth={2} className="text-page" />
          </button>
        </div>

        <div className="glass-nav px-6 sm:px-10 py-8 pt-10">
          <div className="rounded-pill border border-[var(--panel-border)] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-xs opacity-50 uppercase tracking-widest mb-1">Open Resource</p>
              <p className="text-sm font-semibold">{SITE.nameZh}</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[var(--panel-border)]" aria-hidden />
            <div>
              <p className="text-xs opacity-50 uppercase tracking-widest mb-1">Categories</p>
              <p className="text-sm font-semibold">BGM · Video · Meme · News</p>
            </div>
          </div>
          <p className="text-center text-xs opacity-40 mt-6">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
