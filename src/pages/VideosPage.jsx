import { useState, useMemo } from 'react';
import { Film } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ReadOnlyBanner from '../components/shared/ReadOnlyBanner';
import PageToolbar from '../components/shared/PageToolbar';
import EmptyState from '../components/ui/EmptyState';
import VideoCard from '../components/videos/VideoCard';
import { SECTION_META } from '../config/navigation';
import { filterBySearch, sortItems } from '../utils/filterItems';

const meta = SECTION_META.videos;

export default function VideosPage({ items, searchQuery }) {
  const [sortBy, setSortBy] = useState('date-desc');
  const [viewMode, setViewMode] = useState('grid');

  const filtered = useMemo(
    () => sortItems(filterBySearch(items, searchQuery, ['title', 'description', 'situation']), sortBy),
    [items, searchQuery, sortBy]
  );

  return (
    <div className="animate-fade-in">
      <ReadOnlyBanner />
      <PageHeader title={meta.title} subtitle={meta.subtitle} emoji={meta.emoji} count={filtered.length} />
      <PageToolbar count={filtered.length} sortBy={sortBy} onSortChange={setSortBy} viewMode={viewMode} onViewModeChange={setViewMode} />

      {filtered.length === 0 ? (
        <EmptyState icon={Film} title={searchQuery ? '找不到符合的影片' : '尚無影片素材'} description="試試調整搜尋條件，或稍後再來查看。" />
      ) : (
        <div className={viewMode === 'grid' ? 'grid gap-5 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-col gap-4'}>
          {filtered.map((item, i) => (
            <VideoCard key={item.id} item={item} viewMode={viewMode} delayClass={`animate-fade-in-delay-${Math.min(i + 1, 5)}`} />
          ))}
        </div>
      )}
    </div>
  );
}
