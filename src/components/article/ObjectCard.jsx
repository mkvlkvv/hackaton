import styles from '@/styles/Article.module.css';
import Gallery from './Gallery';

export default function ObjectCard({ obj }) {
  const address = obj.info.find((i) => i.label === 'Адрес')?.value;
  const otherInfo = obj.info.filter((i) => i.label !== 'Адрес');

  return (
    <section
      className={styles.object}
      aria-labelledby={`obj-${obj.id}`}
      itemScope
      itemType="https://schema.org/TouristAttraction"
    >
      <h3 id={`obj-${obj.id}`} className={styles.objectTitle} itemProp="name">
        {obj.title}
      </h3>

      <p className={styles.paragraph} itemProp="description">{obj.description}</p>

      <Gallery images={obj.gallery} label={`Галерея: ${obj.title}`} />

      <div className={styles.objectInfo}>
        {address && (
          <address className={styles.objectAddress} itemProp="address">
            <strong>Адрес: </strong>{address}
          </address>
        )}
        <dl className={styles.infoList}>
          {otherInfo.map((i) => (
            <div key={i.label} className={styles.infoRow}>
              <dt>{i.label}:</dt>
              <dd>
                {i.isLink ? (
                  <a href={i.value} target="_blank" rel="noopener noreferrer"
                     aria-label={`${i.label} (открывается в новой вкладке)`}>
                    {i.value}
                  </a>
                ) : i.value}
              </dd>
            </div>
          ))}
        </dl>

        {obj.features?.length > 0 && (
          <>
            <h4 className={styles.featuresTitle}>Особенности</h4>
            <ul className={styles.features}>
              {obj.features.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
                    <path d="M3 7 L6 10 L11 4" stroke="currentColor" strokeWidth="1.5"
                          fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}