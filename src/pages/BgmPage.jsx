import { useState, useMemo } from 'react';
import { Music } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ReadOnlyBanner from '../components/shared/ReadOnlyBanner';
import PageToolbar from '../components/shared/PageToolbar';
import EmptyState from '../components/ui/EmptyState';
import BgmCard from '../components/bgm/BgmCard';
import { MOODS } from '../constants/moods';
import { SECTION_META } from '../config/navigation';
import { filterBySearch, sortItems } from '../utils/filterItems';

const SEARCH_FIELDS = ['title', 'artist', 'description', 'situation'];
const meta = SECTION_META.bgm;

export default function BgmPage({ items, searchQuery }) {
  const [sortBy, setSortBy] = useState('date-desc');
  const [viewMode, setViewMode] = useState('grid');
  const [moodFilter, setMoodFilter] = useState('all');

  const filtered = useMemo(() => {
    let list = filterBySearch(items, searchQuery, SEARCH_FIELDS);
    if (moodFilter !== 'all') list = list.filter(i => i.mood === moodFilter);
    return sortItems(list, sortBy);
  }, [items, searchQuery, sortBy, moodFilter]);

  const gridClass = viewMode === 'grid'
    ? 'grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
    : 'flex flex-col gap-4';

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
          <select value={moodFilter} onChange={e => setMoodFilter(e.target.value)} className="select-field py-1.5 px-3 text-xs w-auto">
            <option value="all">全部氣氛</option>
            {MOODS.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        }
      />

      {filtered.length === 0 ? (
        <EmptyState
          icon={Music}
          title={searchQuery ? '找不到符合的 BGM' : '尚無 BGM'}
          description={searchQuery ? '試試其他關鍵字或清除搜尋。' : '管理員尚未加入音樂素材。'}
        />
      ) : (
        <div className={gridClass}>
          {filtered.map((item, i) => (
            <BgmCard key={item.id} item={item} viewMode={viewMode} delayClass={`animate-fade-in-delay-${Math.min(i + 1, 5)}`} />
          ))}
        </div>
      )}
    </div>
  );
}
