import { useId, useState } from 'react';
import styles from '@/styles/Page.module.css';

const VISIBLE = 4;

export default function TagFilters({ tags, activeTags, onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const legendId = useId();
  const shown = expanded ? tags : tags.slice(0, VISIBLE);

  return (
    <div role="group" aria-labelledby={legendId} className={styles.tagsGroup}>
      <span id={legendId} className="sr-only">Быстрые фильтры по тегам</span>
      {shown.map(tag => {
        const pressed = activeTags.includes(tag.id);
        return (
          <button
            key={tag.id}
            type="button"
            className={styles.tagBtn}
            aria-pressed={pressed}
            onClick={() => onToggle(tag.id)}
          >
            {tag.name}
          </button>
        );
      })}
      {tags.length > VISIBLE && (
        <button
          type="button"
          className={`${styles.tagBtn} ${styles.tagBtnMore}`}
          aria-expanded={expanded}
          aria-label={expanded ? 'Скрыть дополнительные теги' : 'Показать все теги фильтрации'}
          onClick={() => setExpanded(v => !v)}
        >
          {expanded ? 'Скрыть' : 'Показать ещё...'}
        </button>
      )}
    </div>
  );
}