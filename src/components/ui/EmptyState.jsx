export default function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="glass-panel p-12 text-center relative z-10">
      {Icon && <Icon size={48} className="mx-auto mb-4 text-white/20" strokeWidth={1.2} />}
      <p className="section-title text-2xl mb-2">{title}</p>
      <p className="text-sm text-white/50 mb-6 max-w-sm mx-auto">{description}</p>
      {action}
    </div>
  );
}
