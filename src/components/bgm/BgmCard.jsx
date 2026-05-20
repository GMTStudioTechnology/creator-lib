import { ExternalLink, Clock, Activity, FileText, Calendar, Tag } from 'lucide-react';
import { MOOD_CONFIG } from '../../constants/moods';
import CopyLinkButton from '../shared/CopyLinkButton';

export default function BgmCard({ item, viewMode, delayClass = '' }) {
  const mood = MOOD_CONFIG[item.mood] || MOOD_CONFIG['其他'];
  const isList = viewMode === 'list';

  // Extract color border styles to dynamic helper
  const sideBorderColor = mood.color.replace('text-', 'border-');

  return (
    <article className={`card-hover glass-panel p-5 relative z-10 overflow-hidden border-l-4 ${sideBorderColor} ${delayClass} ${
      isList ? 'flex flex-col sm:flex-row sm:items-start gap-4' : 'flex flex-col justify-between'
    }`}>
      <div className="flex-1 min-w-0">
        <header className="flex items-start justify-between gap-3 mb-2.5">
          <div className="min-w-0">
            <h3 className="font-semibold text-lg leading-snug tracking-tight truncate hover:text-clip">{item.title}</h3>
            {item.artist && <p className="text-xs opacity-50 mt-0.5 font-medium">{item.artist}</p>}
          </div>
          <span className={`tag-pill shrink-0 ${mood.color} ${mood.bg} ${mood.border}`}>{item.mood}</span>
        </header>

        {/* Improved Metadata Row with Icons */}
        {(item.bpm || item.duration) && (
          <div className="flex items-center gap-3 text-xs opacity-50 mb-3.5">
            {item.bpm && (
              <span className="flex items-center gap-1">
                <Activity size={12} className="opacity-85" />
                {item.bpm} BPM
              </span>
            )}
            {item.duration && (
              <span className="flex items-center gap-1">
                <Clock size={12} className="opacity-85" />
                {item.duration}
              </span>
            )}
          </div>
        )}

        {item.situation && (
          <aside className="mb-3.5 rounded-xl px-3 py-2.5 border border-accent-jade/20 bg-accent-jade/5">
            <p className="text-[10px] uppercase tracking-wider accent-jade font-semibold mb-1 flex items-center gap-1">
              <span>💡</span> 使用情境
            </p>
            <p className="text-xs opacity-80 leading-relaxed">{item.situation}</p>
          </aside>
        )}

        {item.description && (
          <p className="text-xs opacity-60 leading-relaxed mb-3.5 line-clamp-2">{item.description}</p>
        )}

        {item.tags?.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 mb-4 list-none p-0 m-0">
            {item.tags.map(tag => (
              <li key={tag} className="tag-pill border-white/10 bg-white/5 opacity-80 text-[11px] flex items-center gap-0.5">
                <Tag size={10} className="opacity-60" />
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col gap-1.5 mb-4 border-t border-white/5 pt-3.5">
          {item.license && (
            <p className="text-xs opacity-40 font-mono flex items-center gap-1.5">
              <FileText size={12} /> {item.license}
            </p>
          )}
          {item.createdAt && (
            <p className="text-[10px] opacity-30 flex items-center gap-1.5">
              <Calendar size={11} /> 更新 {item.createdAt}
            </p>
          )}
        </div>
      </div>

      <footer className={`flex flex-col gap-2 ${isList ? 'sm:w-44 shrink-0' : 'pt-3 border-t border-[var(--panel-border)]'}`}>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-btn w-full py-2 hover:brightness-110 justify-center">
          <ExternalLink size={14} /> 聆聽 / 下載
        </a>
        <CopyLinkButton url={item.url} className="w-full justify-center py-2" />
      </footer>
    </article>
  );
}