import styles from '@/styles/Page.module.css';

function Arrow() {
  return (
    <svg className={styles.routeArrow} width="10" height="10" viewBox="0 0 10 10"
         aria-hidden="true" focusable="false">
      <path d="M2 5 H8 M6 3 L8 5 L6 7" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export default function ArticleCard({ article }) {
  const { title, image, link, description, tags, properties, route } = article;

  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className={styles.card}
      aria-labelledby={`card-title-${article.id}`}
    >
      <div className={styles.cardImageWrap}>
        <img src={image} alt="" className={styles.cardImage} itemProp="image" loading="lazy" />
        <h3 id={`card-title-${article.id}`} className={styles.cardTitle} itemProp="headline">
          {/* Только заголовок — ссылка; ::after растягивает клик-зону на карточку */}
          <a href={link} className={styles.cardTitleLink}>
            {title}
          </a>
        </h3>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.cardDesc} itemProp="description">{description}</p>
        <hr className={styles.divider} />

        <p className={styles.routes} aria-label="Маршрут следования">
          {route.map((city, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span>{city}</span>
              {i < route.length - 1 && <Arrow />}
            </span>
          ))}
        </p>
        <hr className={styles.divider} />

        <ul className={styles.props}>
          <li className={styles.propItem}>
            <span className={styles.propIcon} aria-hidden="true">📏</span>
            <span><span className="sr-only">Расстояние: </span>{properties.distance}</span>
          </li>
          <li className={styles.propItem}>
            <span className={styles.propIcon} aria-hidden="true">🕐</span>
            <span><span className="sr-only">Часовой пояс: </span>{properties.timezone}</span>
          </li>
          <li className={styles.propItem}>
            <span className={styles.propIcon} aria-hidden="true">📅</span>
            <span><span className="sr-only">Длительность: </span>{properties.duration}</span>
          </li>
          <li className={styles.propItem}>
            <span className={styles.propIcon} aria-hidden="true">🗓️</span>
            <span><span className="sr-only">Сезон: </span>{properties.season}</span>
          </li>
        </ul>
        <hr className={styles.divider} />

        <ul className={styles.tagsLineWrap} aria-label="Теги маршрута">
          {tags.slice(0, 5).map((t) => (
            <li key={t} className={styles.tagChip}>{t}</li>
          ))}
          {tags.length > 5 && <li className={styles.tagMoreDot} aria-hidden="true">• ещё...</li>}
        </ul>
      </div>
    </article>
  );
}