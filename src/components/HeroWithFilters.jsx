import Dropdown from './Dropdown';
import TagFilters from './TagFilters';
import styles from '@/styles/Page.module.css';

export default function HeroWithFilters({
  title, directions, regions, tags,
  direction, region, activeTags,
  onDirectionChange, onRegionChange, onToggleTag, onReset,
  resultCount
}) {
  const hasActive = direction || region || activeTags.length > 0;

  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <div className={styles.container}>
        <h1 id="page-title" className={styles.heroTitle}>{title}</h1>

        <div className={styles.filtersGrid} role="region" aria-label="Фильтры маршрутов">
          <div className={styles.filterSelects}>
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
              options={regions}
              value={region}
              onChange={onRegionChange}
            />
          </div>

          <div className={styles.tagsWrap}>
            <TagFilters tags={tags} activeTags={activeTags} onToggle={onToggleTag} />
          </div>

          <div className={styles.countAndReset}>
            <p className={styles.count} aria-hidden="true">
              Всего маршрутов: <span className={styles.countNumber}>{resultCount}</span>
            </p>
            {hasActive && (
              <button
                type="button"
                className={styles.resetBtn}
                onClick={onReset}
                aria-label="Сбросить все активные фильтры"
              >
                Сбросить фильтры
                <span className={styles.resetCross} aria-hidden="true">✕</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}