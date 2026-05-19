export default function PageHeader({ title, subtitle, emoji, count }) {
  return (
    <header className="mb-8 relative z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="stat-ring text-xl">{emoji}</span>
        {count != null && <span className="timeline-pill text-[10px]">{count} 項素材</span>}
      </div>
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle mt-1">{subtitle}</p>
    </header>
  );
}
