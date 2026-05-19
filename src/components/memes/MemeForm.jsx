import TagInput from '../ui/TagInput';

export const EMPTY_MEME_FORM = {
  title: '', url: '', tags: [], license: '', description: '', situation: '', origin: '',
};

export default function MemeForm({ form, setForm, onSubmit, onClose, submitLabel }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">梗圖名稱 *</label>
        <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="input-field" placeholder="梗圖標題或描述" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">來源連結 *</label>
        <input value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} className="input-field" placeholder="https://knowyourmeme.com/…" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">梗的起源 / 來源</label>
        <input value={form.origin} onChange={e => setForm(f => ({ ...f, origin: e.target.value }))} className="input-field" placeholder="例：2013 年漫畫、某次直播事件" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">使用情境</label>
        <input value={form.situation} onChange={e => setForm(f => ({ ...f, situation: e.target.value }))} className="input-field" placeholder="例：失敗瞬間、反差笑點" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">備注說明</label>
        <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          className="textarea-field" rows={3} placeholder="梗的背景、如何使用…" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">授權 / 版權說明</label>
        <input value={form.license} onChange={e => setForm(f => ({ ...f, license: e.target.value }))} className="input-field" placeholder="Meme / Fair Use / CC0…" />
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
