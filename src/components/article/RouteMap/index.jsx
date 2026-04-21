import { useState, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import RouteList from './RouteList';
import RouteTimeline from './RouteTimeline';
import DownloadLinks from './DownloadLinks';
import styles from './RouteMap.module.css';

// Карта грузится только на клиенте (Leaflet требует window)
const MapView = dynamic(() => import('./MapView'), {
  ssr: false,
  loading: () => (
    <div className={styles.mapLoading} role="status" aria-live="polite">
      Загрузка карты…
    </div>
  ),
});

const VIEWS = [
  { id: 'list',     label: 'Список',  icon: '📋' },
  { id: 'timeline', label: 'Схема',   icon: '📊' },
  { id: 'map',      label: 'Карта',   icon: '🗺' },
];

export default function RouteMap({ data }) {
  // По умолчанию — Список: работает сразу и доступен для всех
  const [view, setView] = useState('list');
  const tabRefs = useRef({});

  // Клавиатурная навигация по табам (паттерн APG Tabs)
  const handleTabKeyDown = useCallback((event, currentId) => {
    const currentIndex = VIEWS.findIndex((v) => v.id === currentId);
    let nextIndex = null;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % VIEWS.length;
        break;
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + VIEWS.length) % VIEWS.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = VIEWS.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextId = VIEWS[nextIndex].id;
    setView(nextId);
    tabRefs.current[nextId]?.focus();
  }, []);

  if (!data || !data.points?.length) return null;

  return (
    <section
      className={styles.routeMap}
      aria-labelledby="route-map-heading"
    >
      <h2 id="route-map-heading" className={styles.heading}>
        Маршрут путешествия
      </h2>

      {/* Сводка — читается скринридером всегда, до выбора вида */}
      <dl className={styles.summary}>
        <div className={styles.summaryItem}>
          <dt>Общее расстояние</dt>
          <dd>{data.summary.totalDistance}</dd>
        </div>
        <div className={styles.summaryItem}>
          <dt>Длительность</dt>
          <dd>{data.summary.duration}</dd>
        </div>
        <div className={styles.summaryItem}>
          <dt>Транспорт</dt>
          <dd>{data.summary.transport}</dd>
        </div>
        <div className={styles.summaryItem}>
          <dt>Сложность</dt>
          <dd>{data.summary.difficulty}</dd>
        </div>
      </dl>

      {/* Переключатель видов (APG Tabs) */}
      <div
        role="tablist"
        aria-label="Способ отображения маршрута"
        className={styles.tablist}
      >
        {VIEWS.map((v) => {
          const selected = view === v.id;
          return (
            <button
              key={v.id}
              ref={(el) => { tabRefs.current[v.id] = el; }}
              role="tab"
              id={`route-tab-${v.id}`}
              aria-selected={selected}
              aria-controls={`route-panel-${v.id}`}
              tabIndex={selected ? 0 : -1}
              className={`${styles.tab} ${selected ? styles.tabActive : ''}`}
              onClick={() => setView(v.id)}
              onKeyDown={(e) => handleTabKeyDown(e, v.id)}
            >
              <span aria-hidden="true" className={styles.tabIcon}>{v.icon}</span>
              <span>{v.label}</span>
            </button>
          );
        })}
      </div>

      {/* Панели */}
      <div
        role="tabpanel"
        id="route-panel-list"
        aria-labelledby="route-tab-list"
        hidden={view !== 'list'}
        tabIndex={0}
        className={styles.panel}
      >
        <RouteList points={data.points} segments={data.segments} />
      </div>

      <div
        role="tabpanel"
        id="route-panel-timeline"
        aria-labelledby="route-tab-timeline"
        hidden={view !== 'timeline'}
        tabIndex={0}
        className={styles.panel}
      >
        <RouteTimeline points={data.points} segments={data.segments} />
      </div>

      <div
        role="tabpanel"
        id="route-panel-map"
        aria-labelledby="route-tab-map"
        hidden={view !== 'map'}
        tabIndex={0}
        className={styles.panel}
      >
        {/* Карту монтируем только при активации, чтобы не тянуть Leaflet зря */}
        {view === 'map' && <MapView points={data.points} />}
      </div>

      <DownloadLinks
        gpxUrl={data.gpxUrl}
        externalMaps={data.externalMaps}
      />
    </section>
  );
}