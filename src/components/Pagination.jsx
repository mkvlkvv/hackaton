import styles from '@/styles/Page.module.css';

function Chevron({ double, left }) {
  const d = double
    ? (left ? 'M9 2 L4 7 L9 12 M14 2 L9 7 L14 12' : 'M5 2 L10 7 L5 12 M10 2 L15 7 L10 12')
    : (left ? 'M10 2 L5 7 L10 12' : 'M5 2 L10 7 L5 12');
  return (
    <svg width="16" height="14" viewBox="0 0 18 14" aria-hidden="true" focusable="false">
      <path d={d} stroke="currentColor" strokeWidth="1.5" fill="none"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pagination({ currentPage, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Навигация по страницам" className={styles.paginationWrap}>
      <div className={styles.paginationContainer}>
        <button type="button" className={styles.switchBtn}
                disabled={currentPage === 1}
                onClick={() => onChange(1)}
                aria-label="На первую страницу">
          <Chevron double left />
        </button>
        <button type="button" className={styles.switchBtn}
                disabled={currentPage === 1}
                onClick={() => onChange(currentPage - 1)}
                aria-label="Предыдущая страница">
          <Chevron left />
        </button>

        <ul className={styles.pagination}>
          {pages.map((p) => {
            const isCurrent = p === currentPage;
            return (
              <li key={p}
                  className={`${styles.pageItem} ${isCurrent ? styles.pageItemSelected : ''}`}>
                <button
                  type="button"
                  className={styles.pageLink}
                  onClick={() => onChange(p)}
                  aria-label={`Страница ${p}`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {p}
                </button>
              </li>
            );
          })}
        </ul>

        <button type="button" className={styles.switchBtn}
                disabled={currentPage === totalPages}
                onClick={() => onChange(currentPage + 1)}
                aria-label="Следующая страница">
          <Chevron />
        </button>
        <button type="button" className={styles.switchBtn}
                disabled={currentPage === totalPages}
                onClick={() => onChange(totalPages)}
                aria-label="На последнюю страницу">
          <Chevron double />
        </button>
      </div>
    </nav>
  );
}