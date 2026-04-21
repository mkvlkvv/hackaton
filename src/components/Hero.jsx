import styles from '@/styles/Page.module.css';

export default function Hero({ title, description, totalCount }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroContent}>
        <h1 id="hero-title">{title}</h1>
        {description && <p>{description}</p>}
        {totalCount != null && <p>Всего маршрутов: {totalCount}</p>}
      </div>
    </section>
  );
}