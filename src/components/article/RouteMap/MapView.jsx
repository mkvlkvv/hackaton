import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapView.module.css';

// Фикс иконок Leaflet в Next.js (стандартные пути ломаются)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Хук: автоматически подгоняет карту под все точки маршрута
function FitBounds({ points }) {
  const map = useMap();
  useEffect(() => {
    if (!points.length) return;
    const bounds = L.latLngBounds(points.map((p) => p.coordinates));
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, points]);
  return null;
}

export default function MapView({ points }) {
  const containerRef = useRef(null);

  // Escape возвращает фокус на активный таб, чтобы выйти из карты
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        const tab = document.getElementById('route-tab-map');
        tab?.focus();
      }
    };
    const el = containerRef.current;
    el?.addEventListener('keydown', handleKeyDown);
    return () => el?.removeEventListener('keydown', handleKeyDown);
  }, []);

  const polylinePositions = points.map((p) => p.coordinates);
  const center = points[0]?.coordinates || [66, 72];

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label="Интерактивная карта маршрута. Используйте стрелки для перемещения, клавиши плюс и минус для масштабирования, Tab для перехода по точкам, Enter для открытия информации. Нажмите Escape для выхода из карты."
      className={styles.mapWrapper}
    >
      {/* Текстовая альтернатива — краткая сводка */}
      <p className="sr-only">
        На карте отображён маршрут из {points.length} точек:{' '}
        {points.map((p) => p.name).join(' → ')}.
        Полное описание точек доступно на вкладке «Список».
      </p>

      <MapContainer
        center={center}
        zoom={5}
        keyboard={true}
        keyboardPanDelta={80}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitBounds points={points} />

        {/* Белая обводка под основной линией — для контраста */}
        <Polyline
          positions={polylinePositions}
          pathOptions={{ color: '#ffffff', weight: 7, opacity: 1 }}
        />
        <Polyline
          positions={polylinePositions}
          pathOptions={{ color: '#185fa5', weight: 4, opacity: 1 }}
        />

        {points.map((point) => (
          <Marker
            key={point.id}
            position={point.coordinates}
            keyboard={true}
            alt={`Точка ${point.order}: ${point.name}`}
            title={`${point.order}. ${point.name}`}
          >
            <Popup>
              <strong>{point.order}. {point.name}</strong>
              {point.description && <p>{point.description}</p>}
              <a href={`#${point.dayRef}`}>Читать о дне →</a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <p className={styles.mapHint}>
        <span aria-hidden="true">💡 </span>
        Прокрутка страницы работает обычным образом. Для масштабирования карты кликните по ней
        и используйте клавиши <kbd>+</kbd> / <kbd>−</kbd>, либо кнопки зума.
      </p>
    </div>
  );
}