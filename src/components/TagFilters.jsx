import { useId, useState } from 'react';
import styles from '@/styles/Page.module.css';

const VISIBLE = 4;

export default function TagFilters({ tags, activeTags, onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const legendId = useId();
  const extraId = useId();

  const primary = tags.slice(0, VISIBLE);
  const extra = tags.slice(VISIBLE);

  return (
    <div role="group" aria-labelledby={legendId} className={styles.tagsGroup}>
      <span id={legendId} className="sr-only">Быстрые фильтры по тегам</span>

      {primary.map((tag) => (
        <button
          key={tag.id}
          type="button"
          className={styles.tagBtn}
          aria-pressed={activeTags.includes(tag.id)}
          onClick={() => onToggle(tag.id)}
        >
          {tag.name}
        </button>
      ))}

      {/* Disclosure: кнопка + управляемая область с id */}
      <span id={extraId} hidden={!expanded} className={styles.tagsExtra}>
        {extra.map((tag) => (
          <button
            key={tag.id}
            type="button"
            className={styles.tagBtn}
            aria-pressed={activeTags.includes(tag.id)}
            onClick={() => onToggle(tag.id)}
          >
            {tag.name}
          </button>
        ))}
      </span>
    </div>
  );
}