import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BgmPage from './pages/BgmPage';
import VideosPage from './pages/VideosPage';
import MemesPage from './pages/MemesPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import { useStore } from './hooks/useStore';
import { useTheme } from './hooks/useTheme';

const PAGE_MAP = {
  home: HomePage,
  bgm: BgmPage,
  videos: VideosPage,
  memes: MemesPage,
  news: NewsPage,
  about: AboutPage,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useStore();
  const { theme, toggleTheme } = useTheme();

  const Page = PAGE_MAP[activeTab] || HomePage;

  const goTo = tab => {
    setActiveTab(tab);
    if (tab === 'home') setSearchQuery('');
  };

  const pageProps = {
    home: { data, onNavigate: goTo, searchQuery },
    about: { onNavigate: goTo },
    bgm: { items: data.bgm || [], searchQuery },
    videos: { items: data.videos || [], searchQuery },
    memes: { items: data.memes || [], searchQuery },
    news: { items: data.news || [], searchQuery },
  };

  return (
    <div className="min-h-screen bg-page text-page transition-colors duration-300">
      <Header
        activeTab={activeTab}
        setActiveTab={goTo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="max-w-7xl mx-auto px-4 py-6 pb-4">
        {searchQuery && activeTab !== 'home' && activeTab !== 'about' && (
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-page-muted">搜尋：</span>
            <span className="timeline-pill">"{searchQuery}"</span>
            <button type="button" onClick={() => setSearchQuery('')} className="text-xs text-page-muted underline hover:no-underline">
              清除
            </button>
          </div>
        )}

        <Page {...(pageProps[activeTab] || pageProps.home)} />
      </main>

      <Footer onHome={() => goTo('home')} />
    </div>
  );
}
