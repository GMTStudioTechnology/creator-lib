import { ExternalLink } from 'lucide-react';
import { MOOD_CONFIG } from '../../constants/moods';
import CopyLinkButton from '../shared/CopyLinkButton';

export default function BgmCard({ item, viewMode, delayClass = '' }) {
  const mood = MOOD_CONFIG[item.mood] || MOOD_CONFIG['其他'];
  const isList = viewMode === 'list';

  return (
    <article className={`card-hover glass-panel p-5 relative z-10 ${delayClass} ${isList ? 'flex flex-col sm:flex-row sm:items-start gap-4' : ''}`}>
      <div className="flex-1 min-w-0">
        <header className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <h3 className="font-semibold text-lg truncate">{item.title}</h3>
            {item.artist && <p className="text-xs opacity-50 mt-0.5">{item.artist}</p>}
          </div>
          <span className={`tag-pill shrink-0 ${mood.color} ${mood.bg} ${mood.border}`}>{item.mood}</span>
        </header>

        {(item.bpm || item.duration) && (
          <p className="text-xs opacity-40 mb-3">
            {item.bpm && `${item.bpm} BPM`}
            {item.bpm && item.duration && ' · '}
            {item.duration}
          </p>
        )}

        {item.situation && (
          <aside className="mb-3 rounded-2xl px-3 py-2 border border-accent-jade/30 bg-accent-jade/5">
            <p className="text-[10px] uppercase tracking-wider accent-jade font-semibold mb-0.5">使用情境</p>
            <p className="text-xs opacity-80">{item.situation}</p>
          </aside>
        )}

        {item.description && <p className="text-xs opacity-60 leading-relaxed mb-3 line-clamp-3">{item.description}</p>}

        {item.tags?.length > 0 && (
          <ul className="flex flex-wrap gap-1 mb-3 list-none p-0 m-0">
            {item.tags.map(tag => (
              <li key={tag} className="tag-pill border-white/15 bg-white/5 opacity-80">#{tag}</li>
            ))}
          </ul>
        )}

        {item.license && <p className="text-xs opacity-35 mb-2 font-mono">📜 {item.license}</p>}
        {item.createdAt && <p className="text-[10px] opacity-25">更新 {item.createdAt}</p>}
      </div>

      <footer className={`flex flex-col gap-2 ${isList ? 'sm:w-44 shrink-0' : 'pt-3 border-t border-[var(--panel-border)]'}`}>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-btn w-full">
          <ExternalLink size={14} /> 聆聽 / 下載
        </a>
        <CopyLinkButton url={item.url} className="w-full justify-center" />
      </footer>
    </article>
  );
}
