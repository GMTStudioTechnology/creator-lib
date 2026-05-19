export function filterBySearch(items, searchQuery, fields = ['title']) {
  if (!searchQuery?.trim()) return items;
  const q = searchQuery.toLowerCase().trim();
  return items.filter(item =>
    fields.some(field => {
      const val = item[field];
      if (Array.isArray(val)) return val.some(v => String(v).toLowerCase().includes(q));
      return val && String(val).toLowerCase().includes(q);
    }) ||
    item.tags?.some(t => t.toLowerCase().includes(q))
  );
}

export function sortItems(items, sortBy) {
  const copy = [...items];
  switch (sortBy) {
    case 'title-asc':
      return copy.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'zh-TW'));
    case 'title-desc':
      return copy.sort((a, b) => (b.title || '').localeCompare(a.title || '', 'zh-TW'));
    case 'date-asc':
      return copy.sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''));
    case 'date-desc':
    default:
      return copy.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  }
}
