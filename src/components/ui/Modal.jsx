import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Modal({ title, onClose, children, size = 'md' }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const sizeClass = size === 'lg' ? 'max-w-2xl' : 'max-w-lg';

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`glass-panel w-full ${sizeClass} mx-auto max-h-[90vh] flex flex-col animate-fade-in relative z-10`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-glass-border relative z-10">
          <h2 className="section-title text-2xl !normal-case">{title}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-6 py-5 relative z-10">{children}</div>
      </div>
    </div>
  );
}
