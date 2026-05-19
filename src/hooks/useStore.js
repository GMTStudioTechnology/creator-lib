import { defaultData } from '../data/defaultData';

/** 唯讀資料：僅從 defaultData.js 載入，訪客無法透過 UI 修改 */
export function useStore() {
  return { data: defaultData };
}
