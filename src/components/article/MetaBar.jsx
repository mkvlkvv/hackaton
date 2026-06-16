import styles from '@/styles/Article.module.css';

export default function MetaBar({ meta }) {
  const items = [
    { label: 'Расстояние', value: meta.properties?.distance, icon: '📏' },
    { label: 'Часовой пояс', value: meta.properties?.timezone, icon: '🕐' },
    { label: 'Длительность', value: meta.properties?.duration, icon: '📅' },
    { label: 'Сезон', value: meta.properties?.season, icon: '🗓️' },
  ].filter((i) => i.value);

  return (
    <dl className={styles.metaBar} aria-label="Характеристики маршрута">
      {items.map((i) => (
        <div key={i.label} className={styles.metaItem}>
          <dt>
            <span aria-hidden="true">{i.icon}</span> {i.label}
          </dt>
          <dd>{i.value}</dd>
        </div>
      ))}
    </dl>
  );
}