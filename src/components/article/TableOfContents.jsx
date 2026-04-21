import styles from '@/styles/Article.module.css';

export default function TableOfContents({ days }) {
  return (
    <nav aria-label="Оглавление статьи" className={styles.toc}>
      <h2 className={styles.tocTitle}>Содержание</h2>
      <ol className={styles.tocList}>
        {days.map((day) => (
          <li key={day.id}>
            <a href={`#${day.id}`}>{day.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
