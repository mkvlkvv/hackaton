import { useState, useId } from 'react';
import styles from '@/styles/Page.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <a href="/" className={styles.logoBlock} aria-label="На главную — Путешествуем.рф">
          <span className={styles.logoIcon} aria-hidden="true">П</span>
          <span className={styles.logoText}>Туризм и&nbsp;гостеприимство</span>
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          <a href="/news">Все новости</a>
          <a href="/photobank">Фотобанк</a>
        </nav>

        <div className={styles.headerRight}>
          <nav className={styles.headerSocials} aria-label="Социальные сети">
            <a href="https://vk.com/puteshestvuem_rf" className={styles.headerSocial} aria-label="ВКонтакте">VK</a>
            <a href="https://ok.ru/puteshestvuem.rf" className={styles.headerSocial} aria-label="Одноклассники">OK</a>
            <a href="https://max.ru/puteshestvuem_rf" className={styles.headerSocial} aria-label="MAX">M</a>
          </nav>

          <button type="button" className={styles.iconBtn} aria-label="Поиск">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
              <circle cx="7.5" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M11 11 L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.iconBtn}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true" focusable="false">
              <path d="M0 1 H18 M0 6 H18 M0 11 H18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Управляемая область меню (Disclosure target) */}
      <div id={menuId} hidden={!menuOpen} className={styles.mobileMenu}>
        <nav aria-label="Мобильное меню">
          <a href="/news">Все новости</a>
          <a href="/photobank">Фотобанк</a>
        </nav>
      </div>
    </header>
  );
}