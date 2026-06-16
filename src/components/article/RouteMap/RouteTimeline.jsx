import styles from './RouteMap.module.css';

export default function RouteTimeline({ points, segments }) {
  const segmentByFrom = segments.reduce((acc, s) => {
    acc[s.from] = s;
    return acc;
  }, {});

  return (
    <>
      {/* Текстовое резюме для скринридеров — краткое, не дублирует «Список» */}
      <p className="sr-only">
        Схематичное представление маршрута из {points.length} точек.
        Для подробного описания каждой точки переключитесь на вкладку «Список».
      </p>

      <ol className={styles.timeline} aria-label="Схема маршрута">
        {points.map((point, i) => {
          const segment = segmentByFrom[point.id];
          const isLast = i === points.length - 1;

          return (
            <li key={point.id} className={styles.timelineItem}>
              <div className={styles.timelinePoint}>
                <span className={styles.timelineNumber} aria-hidden="true">
                  {point.order}
                </span>
                <strong className={styles.timelineName}>{point.name}</strong>
              </div>

              {!isLast && segment && (
                <div
                  className={styles.timelineSegment}
                  aria-label={`${segment.distance}, ${segment.duration}`}
                >
                  <span className={styles.timelineArrow} aria-hidden="true">→</span>
                  <span className={styles.timelineDistance} aria-hidden="true">
                    {segment.distance}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}