import styles from './RouteMap.module.css';

export default function DownloadLinks({ gpxUrl, externalMaps }) {
  return (
    <nav className={styles.downloads} aria-label="Дополнительные действия с маршрутом">
      <ul className={styles.downloadsList} role="list">
        {gpxUrl && (
          <li>
            <a
              href={gpxUrl}
              download
              className={styles.downloadLink}
              aria-label="Скачать маршрут в формате GPX для навигаторов"
            >
              <span aria-hidden="true">📥</span> Скачать GPX
            </a>
          </li>
        )}

        {externalMaps?.yandex && (
          <li>
            <a
              href={externalMaps.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadLink}
              aria-label="Открыть маршрут на Яндекс Картах, откроется в новой вкладке"
            >
              <span aria-hidden="true">🔗</span> Яндекс Карты
            </a>
          </li>
        )}

        {externalMaps?.osm && (
          <li>
            <a
              href={externalMaps.osm}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadLink}
              aria-label="Открыть маршрут на OpenStreetMap, откроется в новой вкладке"
            >
              <span aria-hidden="true">🔗</span> OpenStreetMap
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}