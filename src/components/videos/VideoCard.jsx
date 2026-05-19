import { ExternalLink, Film, Monitor, Play } from 'lucide-react';
import CopyLinkButton from '../shared/CopyLinkButton';

export default function VideoCard({ item, viewMode, delayClass = '' }) {
  const isList = viewMode === 'list';

  return (
    <article className={`card-hover glass-panel overflow-hidden relative z-10 ${delayClass} ${isList ? 'flex flex-col sm:flex-row' : ''}`}>
      <div className={`relative bg-[var(--panel-bg-soft)] overflow-hidden group shrink-0 ${isList ? 'sm:w-56 h-40' : 'h-48 w-full'}`}>
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={e => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Film size={36} className="opacity-20" />
          </div>
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <Play size={20} className="text-white" fill="white" />
        </span>
        {item.resolution && (
          <span className="absolute top-2 right-2 rounded-pill bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 flex items-center gap-1">
            <Monitor size={10} /> {item.resolution}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 leading-tight">{item.title}</h3>

        {item.situation && (
          <aside className="mb-3 rounded-2xl px-3 py-2 border border-accent-ember/30 bg-accent-ember/5">
            <p className="text-[10px] uppercase tracking-wider accent-ember font-semibold mb-0.5">使用情境</p>
            <p className="text-xs opacity-80">{item.situation}</p>
          </aside>
        )}

        {item.description && <p className="text-xs opacity-60 leading-relaxed mb-3 line-clamp-2">{item.description}</p>}

        <ul className="flex flex-wrap gap-1 mb-3 mt-auto list-none p-0">
          {item.tags?.map(tag => (
            <li key={tag} className="tag-pill border-white/15 bg-white/5 opacity-80">#{tag}</li>
          ))}
          {item.format && <li className="tag-pill opacity-50">{item.format}</li>}
        </ul>

        {item.license && <p className="text-xs opacity-35 mb-3">📜 {item.license}</p>}

        <footer className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-[var(--panel-border)]">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-btn flex-1">
            <ExternalLink size={13} /> 查看 / 下載
          </a>
          <CopyLinkButton url={item.url} />
        </footer>
      </div>
    </article>
  );
}
