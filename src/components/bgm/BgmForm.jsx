import TagInput from '../ui/TagInput';

export const MOOD_CONFIG = {
  '放鬆': { color: 'text-accent-jade', bg: 'bg-accent-jade/10', border: 'border-accent-jade/30' },
  '史詩': { color: 'text-accent-ember', bg: 'bg-accent-ember/10', border: 'border-accent-ember/30' },
  '輕快': { color: 'text-accent-gold', bg: 'bg-accent-gold/10', border: 'border-accent-gold/30' },
  '悲傷': { color: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/30' },
  '緊張': { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-400/30' },
  '其他': { color: 'text-white/70', bg: 'bg-white/5', border: 'border-white/20' },
};

export const MOODS = Object.keys(MOOD_CONFIG);

export const EMPTY_BGM_FORM = {
  title: '', artist: '', url: '', mood: '放鬆', tags: [],
  license: '', description: '', situation: '', bpm: '', duration: '',
};

export default function BgmForm({ form, setForm, onSubmit, onClose, submitLabel }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">曲目名稱 *</label>
          <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="input-field" placeholder="曲名" />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">創作者 / 藝術家</label>
          <input value={form.artist} onChange={e => setForm(f => ({ ...f, artist: e.target.value }))} className="input-field" placeholder="作者名" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">連結 *</label>
        <input value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} className="input-field" placeholder="https://" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">氣氛</label>
          <select value={form.mood} onChange={e => setForm(f => ({ ...f, mood: e.target.value }))} className="select-field">
            {MOODS.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">BPM</label>
          <input value={form.bpm} onChange={e => setForm(f => ({ ...f, bpm: e.target.value }))} className="input-field" placeholder="例：90" />
        </div>
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">時長</label>
          <input value={form.duration} onChange={e => setForm(f => ({ ...f, duration: e.target.value }))} className="input-field" placeholder="例：3:24" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">授權條款</label>
        <input value={form.license} onChange={e => setForm(f => ({ ...f, license: e.target.value }))} className="input-field" placeholder="CC BY 4.0 / CC0…" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">使用情境</label>
        <input value={form.situation} onChange={e => setForm(f => ({ ...f, situation: e.target.value }))} className="input-field" placeholder="例：直播閒聊、高潮片段剪輯" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">備注說明</label>
        <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          className="textarea-field" rows={3} placeholder="版權注意事項、使用限制等…" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">標籤</label>
        <TagInput tags={form.tags} onChange={tags => setForm(f => ({ ...f, tags }))} />
      </div>
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onSubmit} disabled={!form.title || !form.url} className="btn-primary flex-1 justify-center disabled:opacity-40 disabled:cursor-not-allowed">{submitLabel}</button>
        <button type="button" onClick={onClose} className="btn-ghost">取消</button>
      </div>
    </div>
  );
}
