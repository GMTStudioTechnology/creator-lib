import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const savedTheme = localStorage.getItem('creator-lib-theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// 舊版 UI 曾寫入 localStorage，清除以免覆蓋程式碼內的 defaultData
localStorage.removeItem('creator-lib-data');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
