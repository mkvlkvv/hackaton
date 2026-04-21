import styles from '@/styles/Article.module.css';

export default function PlacesCarousel({ title, items, type, idPrefix }) {
  const headingId = `${idPrefix}-h`;

  const buildLabel = (item) => {
    const parts = [item.name];
    if (type === 'hotel') {
      if (item.stars) parts.push(`${item.stars} звезды`);
      if (item.classified) parts.push('классифицировано');
      if (item.distance) parts.push(item.distance);
    } else {
      if (item.distance) parts.push(item.distance);
      if (item.cuisine) parts.push(`кухня: ${item.cuisine}`);
    }
    parts.push('открывается в новой вкладке');
    return parts.join(', ');
  };

  return (
    <section aria-labelledby={headingId} className={styles.placesSection}>
      <h3 id={headingId} className={styles.placesTitle}>{title}</h3>

      <ul className={styles.placesList} role="list">
        {items.map((item, i) => (
          <li key={i} className={styles.placeItem}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.placeLink}
              aria-label={buildLabel(item)}
            >
              <img
                src={item.image}
                alt=""
                className={styles.placeImage}
                loading="lazy"
              />
              <div className={styles.placeBody}>
                {type === 'hotel' && item.classified && (
                  <span className={styles.placeBadge} aria-hidden="true">
                    Классифицировано ✓
                  </span>
                )}
                <p className={styles.placeName} aria-hidden="true">
                  {type === 'hotel' && item.stars && (
                    <span className={styles.placeStars}>
                      {item.stars}
                      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                        <path d="M6 1 L7.5 4.5 L11 5 L8.5 7.5 L9 11 L6 9 L3 11 L3.5 7.5 L1 5 L4.5 4.5 Z"
                              fill="currentColor" />
                      </svg>
                    </span>
                  )}
                  {item.name}
                </p>
                <p className={styles.placeMeta} aria-hidden="true">
                  {item.distance}
                  {item.cuisine && ` · ${item.cuisine}`}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}