import { useMemo } from 'react';
import Dropdown from './Dropdown';
import TagFilters from './TagFilters';
import styles from '@/styles/Page.module.css';

export default function Filters({
  directions, regions, tags,
  direction, region, activeTags,
  onDirectionChange, onRegionChange, onToggleTag, onReset,
  resultCount
}) {
  // Регионы фильтруются по выбранному направлению
  const filteredRegions = useMemo(() => {
    if (!direction) return regions;
    return regions.filter(r => r.directionsId.includes(direction));
  }, [direction, regions]);

  const hasActive = direction || region || activeTags.length > 0;

  return (
    <section className={styles.filters} aria-label="Фильтры маршрутов">
      <div className={styles.container}>
        <div className={styles.filtersRow}>
          <Dropdown
            label="Все направления"
            ariaLabel="Выберите направление"
            options={directions}
            value={direction}
            onChange={onDirectionChange}
          />
          <Dropdown
            label="Все регионы"
            ariaLabel="Выберите регион"
            options={filteredRegions}
            value={region}
            onChange={onRegionChange}
          />
          {hasActive && (
            <button
              type="button"
              className={styles.resetBtn}
              onClick={onReset}
              aria-label="Сбросить все активные фильтры"
            >
              Сбросить фильтры
            </button>
          )}
          <span className={styles.resultCount} aria-hidden="true">
            Найдено: {resultCount}
          </span>
        </div>

        <TagFilters
          tags={tags}
          activeTags={activeTags}
          onToggle={onToggleTag}
        />
      </div>
    </section>
  );
}