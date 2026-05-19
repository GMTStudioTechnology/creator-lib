import { ExternalLink, Calendar, Lightbulb } from 'lucide-react';
import { TYPE_CONFIG } from '../../constants/newsTypes';
import CopyLinkButton from '../shared/CopyLinkButton';

export default function NewsCard({ item, delayClass = '' }) {
  const typeStyle = TYPE_CONFIG[item.type] || TYPE_CONFIG['其他'];

  return (
    <article className={`card-hover glass-panel p-5 relative z-10 ${delayClass}`}>
      <header className="flex items-start gap-3 mb-3 flex-wrap">
        <span className={`tag-pill ${typeStyle.color} ${typeStyle.bg} ${typeStyle.border}`}>{item.type}</span>
        {item.date && (
          <span className="text-xs opacity-40 flex items-center gap-1 font-mono">
            <Calendar size={11} /> {item.date}
          </span>
        )}
        {item.source && <span className="text-xs opacity-30">· {item.source}</span>}
      </header>

      <h3 className="font-semibold text-lg leading-tight mb-3">{item.title}</h3>

      {item.summary && <p className="text-xs opacity-60 leading-relaxed mb-3 line-clamp-3">{item.summary}</p>}

      {item.relevance && (
        <aside className="mb-3 rounded-2xl px-3 py-2 border border-accent-blue/30 bg-accent-blue/5">
          <p className="text-[10px] uppercase tracking-wider accent-blue font-semibold mb-0.5 flex items-center gap-1">
            <Lightbulb size={10} /> 創作切入點
          </p>
          <p className="text-xs opacity-80">{item.relevance}</p>
        </aside>
      )}

      {item.tags?.length > 0 && (
        <ul className="flex flex-wrap gap-1 mb-3 list-none p-0">
          {item.tags.map(tag => (
            <li key={tag} className="tag-pill border-white/15 bg-white/5 opacity-80">#{tag}</li>
          ))}
        </ul>
      )}

      <footer className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-[var(--panel-border)]">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-btn flex-1">
          <ExternalLink size={13} /> 查看原文
        </a>
        <CopyLinkButton url={item.url} />
      </footer>
    </article>
  );
}
