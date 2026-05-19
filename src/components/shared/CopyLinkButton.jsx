import { useState } from 'react';
import { Link2, Check } from 'lucide-react';

export default function CopyLinkButton({ url, className = '' }) {
  const [copied, setCopied] = useState(false);

  const copy = async e => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(url, '_blank');
    }
  };

  return (
    <button type="button" onClick={copy} className={`btn-ghost text-xs py-2 px-3 ${className}`} title="複製連結">
      {copied ? <Check size={14} /> : <Link2 size={14} />}
      {copied ? '已複製' : '複製連結'}
    </button>
  );
}
