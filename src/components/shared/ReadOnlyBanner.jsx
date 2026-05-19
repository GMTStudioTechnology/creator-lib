import { Lock } from 'lucide-react';

export default function ReadOnlyBanner() {
  return (
    <aside className="inverse-card flex items-start gap-3 p-4 mb-6 text-sm" role="status">
      <Lock size={18} className="text-page-muted shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-page">唯讀瀏覽模式</p>
        <p className="text-page-muted mt-0.5 leading-relaxed">
          此站素材由管理員維護，訪客可搜尋與開啟連結，無法在此新增或刪除項目。
        </p>
      </div>
    </aside>
  );
}
