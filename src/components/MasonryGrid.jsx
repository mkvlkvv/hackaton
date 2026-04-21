import ArticleCard from './ArticleCard';
import styles from '@/styles/Page.module.css';

export default function MasonryGrid({ articles }) {
  if (!articles.length) {
    return (
      <div className={styles.container}>
        <p style={{ padding: '48px 0', textAlign: 'center', color: '#666' }}>
          По вашим фильтрам ничего не найдено. Попробуйте изменить параметры.
        </p>
      </div>
    );
  }
  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <div className={styles.masonry}>
          {articles.map(a => <ArticleCard key={a.id} article={a} />)}
        </div>
      </div>
    </section>
  );
}