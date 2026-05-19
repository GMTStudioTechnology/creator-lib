import { LayoutGrid, List, SlidersHorizontal } from 'lucide-react';

const SORT_OPTIONS = [
  { value: 'date-desc', label: '最新優先' },
  { value: 'date-asc', label: '最舊優先' },
  { value: 'title-asc', label: '名稱 A→Z' },
  { value: 'title-desc', label: '名稱 Z→A' },
];

export default function PageToolbar({
  count,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  filterSlot,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6 relative z-10">
      <span className="timeline-pill">{count} 項</span>

      {filterSlot}

      <div className="flex items-center gap-2 ml-auto">
        <SlidersHorizontal size={14} className="text-white/40" />
        <select
          value={sortBy}
          onChange={e => onSortChange(e.target.value)}
          className="select-field py-1.5 px-3 text-xs w-auto min-w-[120px]"
        >
          {SORT_OPTIONS.map(o => (
            <option key={o.value} value={o.value} className="bg-glass-800">{o.label}</option>
          ))}
        </select>

        <div className="flex rounded-pill border border-glass-border overflow-hidden">
          <button
            type="button"
            onClick={() => onViewModeChange('grid')}
            className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-white text-glass-900' : 'text-white/50 hover:text-white'}`}
            aria-label="網格檢視"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('list')}
            className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-white text-glass-900' : 'text-white/50 hover:text-white'}`}
            aria-label="列表檢視"
          >
            <List size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
