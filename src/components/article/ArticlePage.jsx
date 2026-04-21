import styles from '@/styles/Article.module.css';
import Breadcrumbs from './Breadcrumbs';
import TableOfContents from './TableOfContents';
import DayBlock from './DayBlock';
import MetaBar from './MetaBar';
import RouteMap from './RouteMap';

export default function ArticlePage({ meta, content }) {
  return (
    <main id="main" tabIndex={-1} className={styles.main}>
      <article
        className={styles.article}
        itemScope
        itemType="https://schema.org/TravelGuide"
      >
        <header className={styles.hero}>
          <div className={styles.heroImageWrap}>
            <img
              src={content.hero.image}
              alt={content.hero.imageAlt}
              className={styles.heroImage}
              itemProp="image"
            />
            <p className={styles.heroCredit}>Фото: {content.hero.photoCredit}</p>
          </div>
          <h1 className={styles.heroTitle} itemProp="name">{meta.title}</h1>
          <p className={styles.heroLocation}>{meta.location}</p>
        </header>

        <MetaBar meta={meta} />

        <section aria-labelledby="lead-heading" className={styles.lead}>
            <h2 id="lead-heading" className="sr-only">О маршруте</h2>
            <p className={styles.leadText} itemProp="description">{content.lead}</p>
            {content.intro.map((p, i) => <p key={i} className={styles.paragraph}>{p}</p>)}
        </section>

        {content.routeMap && <RouteMap data={content.routeMap} />}

        <TableOfContents days={content.days} />

        {content.days.map((day) => (
          <DayBlock key={day.id} day={day} />
        ))}

        <footer className={styles.articleFooter}>
          <p className={styles.credits}>
            <em>Фото: {content.photoCredits}</em>
          </p>
          <a href="/" className={styles.homeLink}>
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true" focusable="false">
              <path d="M7 2 L2 7 L7 12 M2 7 H16" stroke="currentColor" strokeWidth="1.5"
                    fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            На главную
          </a>
        </footer>
      </article>
    </main>
  );
}