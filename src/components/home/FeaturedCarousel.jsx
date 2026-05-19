import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SECTION_META } from '../../config/navigation';

const GRADIENTS = [
  'from-violet-600/40 to-indigo-900/60',
  'from-amber-500/40 to-orange-900/60',
  'from-emerald-500/40 to-teal-900/60',
];

export default function FeaturedCarousel({ sections, onNavigate }) {
  const [index, setIndex] = useState(0);
  const keys = Object.keys(sections).filter(k => sections[k]?.length);
  if (keys.length === 0) return null;

  const key = keys[index % keys.length];
  const meta = SECTION_META[key];
  const items = sections[key];
  const item = items[0];

  const prev = () => setIndex(i => (i - 1 + keys.length) % keys.length);
  const next = () => setIndex(i => (i + 1) % keys.length);

  return (
    <section className="relative">
      <div className="flex items-center gap-4">
        <button type="button" onClick={prev} className="w-10 h-10 rounded-full glass-nav flex items-center justify-center text-white shrink-0 hover:bg-white/10 transition-colors" aria-label="上一張">
          <ChevronLeft size={20} />
        </button>

        <div className="flex-1 grid sm:grid-cols-3 gap-4">
          {keys.slice(0, 3).map((k, i) => {
            const m = SECTION_META[k];
            const featured = sections[k][0];
            const active = k === key;
            return (
              <button
                key={k}
                type="button"
                onClick={() => { setIndex(keys.indexOf(k)); onNavigate(k); }}
                className={`glass-panel p-0 text-left overflow-hidden card-hover relative z-10 transition-opacity ${active ? 'opacity-100 ring-2 ring-white/30' : 'opacity-60 hover:opacity-90'}`}
              >
                <div className={`h-32 bg-gradient-to-br ${GRADIENTS[i % 3]} flex items-end p-4 relative z-10`}>
                  <span className="text-4xl">{m.emoji}</span>
                </div>
                <div className="p-4 relative z-10">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{m.title}</p>
                  <p className="text-sm font-semibold text-white truncate">{featured?.title}</p>
                </div>
              </button>
            );
          })}
        </div>

        <button type="button" onClick={next} className="w-10 h-10 rounded-full glass-nav flex items-center justify-center text-white shrink-0 hover:bg-white/10 transition-colors" aria-label="下一張">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <button type="button" onClick={() => onNavigate(key)} className="pill-white text-xs px-5 py-2 flex items-center gap-2">
          查看 {meta.title} <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}
