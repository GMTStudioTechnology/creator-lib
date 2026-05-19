import { useState, useMemo } from 'react';
import { Smile } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ReadOnlyBanner from '../components/shared/ReadOnlyBanner';
import PageToolbar from '../components/shared/PageToolbar';
import EmptyState from '../components/ui/EmptyState';
import MemeCard from '../components/memes/MemeCard';
import { SECTION_META } from '../config/navigation';
import { filterBySearch, sortItems } from '../utils/filterItems';

const meta = SECTION_META.memes;

export default function MemesPage({ items, searchQuery }) {
  const [sortBy, setSortBy] = useState('date-desc');
  const [viewMode, setViewMode] = useState('grid');

  const filtered = useMemo(
    () => sortItems(filterBySearch(items, searchQuery, ['title', 'description', 'situation', 'origin']), sortBy),
    [items, searchQuery, sortBy]
  );

  return (
    <div className="animate-fade-in">
      <ReadOnlyBanner />
      <PageHeader title={meta.title} subtitle={meta.subtitle} emoji={meta.emoji} count={filtered.length} />
      <PageToolbar count={filtered.length} sortBy={sortBy} onSortChange={setSortBy} viewMode={viewMode} onViewModeChange={setViewMode} />

      {filtered.length === 0 ? (
        <EmptyState icon={Smile} title={searchQuery ? '找不到符合的梗圖' : '尚無梗圖'} description="試試其他關鍵字。" />
      ) : (
        <div className={viewMode === 'grid' ? 'grid gap-4 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-col gap-4'}>
          {filtered.map((item, i) => (
            <MemeCard key={item.id} item={item} delayClass={`animate-fade-in-delay-${Math.min(i + 1, 5)}`} />
          ))}
        </div>
      )}
    </div>
  );
}
