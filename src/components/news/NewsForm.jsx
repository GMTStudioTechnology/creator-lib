import TagInput from '../ui/TagInput';

export const TYPE_CONFIG = {
  '遊戲更新': { color: 'text-accent-jade', bg: 'bg-accent-jade/10', border: 'border-accent-jade/30' },
  '平台動態': { color: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/30' },
  '活動': { color: 'text-accent-ember', bg: 'bg-accent-ember/10', border: 'border-accent-ember/30' },
  '產業新聞': { color: 'text-accent-gold', bg: 'bg-accent-gold/10', border: 'border-accent-gold/30' },
  '其他': { color: 'text-white/70', bg: 'bg-white/5', border: 'border-white/20' },
};

export const NEWS_TYPES = Object.keys(TYPE_CONFIG);

export const EMPTY_NEWS_FORM = {
  title: '', type: '遊戲更新', url: '', summary: '',
  tags: [], relevance: '', date: '', source: '',
};

export default function NewsForm({ form, setForm, onSubmit, onClose, submitLabel }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">標題 *</label>
        <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="input-field" placeholder="新聞或活動標題" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">類型</label>
          <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} className="select-field">
            {NEWS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">日期</label>
          <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className="input-field" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">來源連結 *</label>
        <input value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} className="input-field" placeholder="https://" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">消息來源</label>
        <input value={form.source} onChange={e => setForm(f => ({ ...f, source: e.target.value }))} className="input-field" placeholder="例：官方部落格、Twitter" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">摘要</label>
        <textarea value={form.summary} onChange={e => setForm(f => ({ ...f, summary: e.target.value }))}
          className="textarea-field" rows={3} placeholder="簡短摘要這則新聞的重點…" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">創作相關性</label>
        <input value={form.relevance} onChange={e => setForm(f => ({ ...f, relevance: e.target.value }))} className="input-field" placeholder="例：可製作速覽影片、適合做短片切入點" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">標籤</label>
        <TagInput tags={form.tags} onChange={tags => setForm(f => ({ ...f, tags }))} />
      </div>
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onSubmit} disabled={!form.title || !form.url} className="btn-primary flex-1 justify-center disabled:opacity-40">{submitLabel}</button>
        <button type="button" onClick={onClose} className="btn-ghost">取消</button>
      </div>
    </div>
  );
}
