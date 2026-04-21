import ArticleCard from './ArticleCard';
import styles from '@/styles/Page.module.css';

export default function ArticlesGrid({ articles }) {
  if (articles.length === 0) {
    return (
      <div className={styles.container}>
        <p style={{ padding: '48px 0', textAlign: 'center', color: '#666' }}>
          По вашим фильтрам ничего не найдено. Попробуйте изменить параметры.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {articles.map(a => <ArticleCard key={a.id} article={a} />)}
      </div>
    </div>
  );
}