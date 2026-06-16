import { useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroWithFilters from '@/components/HeroWithFilters';
import MasonryGrid from '@/components/MasonryGrid';
import Pagination from '@/components/Pagination';
import LiveRegion from '@/components/LiveRegion';
import { ARTICLES, DIRECTIONS, REGIONS, TAGS } from '@/mocks/articles';

const PAGE_SIZE = 9;

export default function HomePage() {
  const [direction, setDirection] = useState(null);
  const [region, setRegion] = useState(null);
  const [activeTags, setActiveTags] = useState([]);
  const [page, setPage] = useState(1);
  const [liveMessage, setLiveMessage] = useState('');

  const filteredRegions = useMemo(() => {
    if (!direction) return REGIONS;
    return REGIONS.filter(r => r.directionsId.includes(direction));
  }, [direction]);

  const filtered = useMemo(() => {
    return ARTICLES.filter(a => {
      if (activeTags.length > 0) {
        const names = activeTags.map(id => TAGS.find(t => t.id === id)?.name);
        if (!names.every(n => a.tags.includes(n))) return false;
      }
      return true;
    });
  }, [activeTags, direction, region]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => { setPage(1); }, [direction, region, activeTags]);
  useEffect(() => { setLiveMessage(`Найдено маршрутов: ${filtered.length}`); }, [filtered.length]);

  const handleToggleTag = (tagId) => {
    setActiveTags(prev => prev.includes(tagId) ? prev.filter(t => t !== tagId) : [...prev, tagId]);
  };

  const handleReset = () => {
    setDirection(null); setRegion(null); setActiveTags([]);
    setLiveMessage('Все фильтры сброшены');
  };

  return (
    <>
      <Head>
        <title>Путешествия — лучший способ быть вместе</title>
        <meta name="description" content="Готовые путеводители по всей России — выбирайте, куда отправиться на машине." />
      </Head>

      <a href="#main" className="sr-only">Перейти к основному содержимому</a>

      <Header />

      <main id="main" tabIndex={-1}>
        <HeroWithFilters
          title="Автомаршруты"
          directions={DIRECTIONS}
          regions={filteredRegions}
          tags={TAGS}
          direction={direction}
          region={region}
          activeTags={activeTags}
          onDirectionChange={setDirection}
          onRegionChange={setRegion}
          onToggleTag={handleToggleTag}
          onReset={handleReset}
          resultCount={filtered.length}
        />

        <LiveRegion message={liveMessage} />

        <MasonryGrid articles={pageItems} />

        <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
      </main>

      <Footer />
    </>
  );
}