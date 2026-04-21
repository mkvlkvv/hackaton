import styles from './RouteMap.module.css';

export default function RouteList({ points, segments }) {
  // Строим словарь сегментов по ключу "from→to" для удобного доступа
  const segmentByFrom = segments.reduce((acc, s) => {
    acc[s.from] = s;
    return acc;
  }, {});

  return (
    <ol className={styles.routeList} aria-label="Точки маршрута по порядку">
      {points.map((point, i) => {
        const segment = segmentByFrom[point.id];
        const isLast = i === points.length - 1;

        return (
          <li key={point.id} className={styles.routeListItem}>
            <article aria-labelledby={`point-${point.id}-title`}>
              <header className={styles.pointHeader}>
                <span className={styles.orderBadge} aria-hidden="true">
                  {point.order}
                </span>
                <span className="sr-only">Точка {point.order}.</span>
                <h3 id={`point-${point.id}-title`} className={styles.pointTitle}>
                  <a href={`#${point.dayRef}`}>{point.name}</a>
                </h3>
              </header>

              {point.description && (
                <p className={styles.pointDescription}>{point.description}</p>
              )}

              {point.address && (
                <address className={styles.pointAddress}>
                  {point.address}
                </address>
              )}
            </article>

            {!isLast && segment && (
              <div className={styles.segmentBlock} aria-label="Переезд до следующей точки">
                <span className={styles.segmentArrow} aria-hidden="true">↓</span>
                <p className={styles.segmentInfo}>
                  <span className="sr-only">Переезд: </span>
                  <strong>{segment.distance}</strong>
                  <span aria-hidden="true"> · </span>
                  <span className="sr-only">, </span>
                  {segment.duration}
                  {segment.road && (
                    <>
                      <span aria-hidden="true"> · </span>
                      <span className="sr-only">, по трассе </span>
                      {segment.road}
                    </>
                  )}
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}