import styles from '@/styles/Article.module.css';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Хлебные крошки" className={styles.breadcrumbs}>
      <ol className={styles.breadcrumbsList}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className={styles.breadcrumbItem}>
              {item.href && !isLast ? (
                <>
                  <a href={item.href}>{item.label}</a>
                  <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
                </>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}