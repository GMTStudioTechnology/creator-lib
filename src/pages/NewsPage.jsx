import { useState, useMemo } from 'react';
import { Newspaper } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ReadOnlyBanner from '../components/shared/ReadOnlyBanner';
import PageToolbar from '../components/shared/PageToolbar';
import EmptyState from '../components/ui/EmptyState';
import NewsCard from '../components/news/NewsCard';
import { NEWS_TYPES } from '../constants/newsTypes';
import { SECTION_META } from '../config/navigation';
import { filterBySearch, sortItems } from '../utils/filterItems';

const meta = SECTION_META.news;

export default function NewsPage({ items, searchQuery }) {
  const [sortBy, setSortBy] = useState('date-desc');
  const [viewMode, setViewMode] = useState('grid');
  const [typeFilter, setTypeFilter] = useState('all');

  const filtered = useMemo(() => {
    let list = filterBySearch(items, searchQuery, ['title', 'summary', 'relevance']);
    if (typeFilter !== 'all') list = list.filter(i => i.type === typeFilter);
    return sortItems(list, sortBy);
  }, [items, searchQuery, sortBy, typeFilter]);

  return (
    <div className="animate-fade-in">
      <ReadOnlyBanner />
      <PageHeader title={meta.title} subtitle={meta.subtitle} emoji={meta.emoji} count={filtered.length} />
      <PageToolbar
        count={filtered.length}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        filterSlot={
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="select-field py-1.5 px-3 text-xs w-auto">
            <option value="all">全部類型</option>
            {NEWS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        }
      />

      {filtered.length === 0 ? (
        <EmptyState icon={Newspaper} title={searchQuery ? '找不到符合的時事' : '尚無時事'} description="試試調整搜尋或篩選條件。" />
      ) : (
        <div className={viewMode === 'grid' ? 'grid gap-4 lg:grid-cols-2' : 'flex flex-col gap-4'}>
          {filtered.map((item, i) => (
            <NewsCard key={item.id} item={item} delayClass={`animate-fade-in-delay-${Math.min(i + 1, 5)}`} />
          ))}
        </div>
      )}
    </div>
  );
}
