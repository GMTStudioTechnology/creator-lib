import TagInput from '../ui/TagInput';

export const EMPTY_VIDEO_FORM = {
  title: '', url: '', thumbnail: '', tags: [],
  license: '', description: '', situation: '', resolution: '', format: '',
};

export default function VideoForm({ form, setForm, onSubmit, onClose, submitLabel }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">素材名稱 *</label>
        <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="input-field" placeholder="素材標題" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">素材連結 *</label>
        <input value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} className="input-field" placeholder="https://" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">封面圖片網址</label>
        <input value={form.thumbnail} onChange={e => setForm(f => ({ ...f, thumbnail: e.target.value }))} className="input-field" placeholder="https://…/thumbnail.jpg" />
        {form.thumbnail && (
          <img src={form.thumbnail} alt="預覽" className="mt-2 rounded-2xl w-full h-32 object-cover border border-glass-border" onError={e => { e.target.style.display = 'none'; }} />
        )}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">解析度</label>
          <select value={form.resolution} onChange={e => setForm(f => ({ ...f, resolution: e.target.value }))} className="select-field">
            <option value="">不確定</option>
            <option>4K</option>
            <option>1080p</option>
            <option>720p</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-white/60 mb-1.5">格式</label>
          <select value={form.format} onChange={e => setForm(f => ({ ...f, format: e.target.value }))} className="select-field">
            <option value="">—</option>
            <option>MP4</option>
            <option>MOV</option>
            <option>WebM</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">授權條款</label>
        <input value={form.license} onChange={e => setForm(f => ({ ...f, license: e.target.value }))} className="input-field" placeholder="Pexels Free / CC0…" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">使用情境</label>
        <input value={form.situation} onChange={e => setForm(f => ({ ...f, situation: e.target.value }))} className="input-field" placeholder="例：轉場過場、VFX 疊加" />
      </div>
      <div>
        <label className="block text-xs font-medium text-white/60 mb-1.5">備注說明</label>
        <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          className="textarea-field" rows={3} placeholder="版權注意事項、使用建議…" />
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
