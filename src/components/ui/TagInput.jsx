import { useState } from 'react';
import { X } from 'lucide-react';

export default function TagInput({ tags, onChange }) {
  const [input, setInput] = useState('');

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) onChange([...tags, trimmed]);
    setInput('');
  };

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {tags.map(tag => (
          <span key={tag} className="tag-pill border-white/20 bg-white/10 text-white flex items-center gap-1">
            {tag}
            <button type="button" onClick={() => onChange(tags.filter(t => t !== tag))} className="hover:text-red-400 transition-colors">
              <X size={11} />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }}
          placeholder="輸入標籤後按 Enter"
          className="input-field flex-1 text-xs py-2"
        />
        <button type="button" onClick={addTag} className="btn-ghost text-xs py-2 px-3">新增</button>
      </div>
    </div>
  );
}
