import { ExternalLink, Smile } from 'lucide-react';
import CopyLinkButton from '../shared/CopyLinkButton';

export default function MemeCard({ item, delayClass = '' }) {
  return (
    <article className={`card-hover glass-panel p-5 relative z-10 ${delayClass}`}>
      <header className="flex items-start gap-3 mb-4">
        <span className="w-12 h-12 rounded-2xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center shrink-0">
          <Smile size={22} className="accent-gold" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
          {item.origin && <p className="text-xs opacity-40 mt-1">起源：{item.origin}</p>}
        </div>
      </header>

      {item.situation && (
        <aside className="mb-3 rounded-2xl px-3 py-2 border border-accent-gold/30 bg-accent-gold/5">
          <p className="text-[10px] uppercase tracking-wider accent-gold font-semibold mb-0.5">使用情境</p>
          <p className="text-xs opacity-80">{item.situation}</p>
        </aside>
      )}

      {item.description && <p className="text-xs opacity-60 leading-relaxed mb-3 line-clamp-3">{item.description}</p>}

      {item.tags?.length > 0 && (
        <ul className="flex flex-wrap gap-1 mb-3 list-none p-0">
          {item.tags.map(tag => (
            <li key={tag} className="tag-pill border-accent-gold/30 bg-accent-gold/10 accent-gold">#{tag}</li>
          ))}
        </ul>
      )}

      {item.license && <p className="text-xs opacity-35 mb-3">📜 {item.license}</p>}

      <footer className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-[var(--panel-border)]">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-btn flex-1">
          <ExternalLink size={13} /> 查看來源
        </a>
        <CopyLinkButton url={item.url} />
      </footer>
    </article>
  );
}
