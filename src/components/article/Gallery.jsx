import { useId, useRef, useState } from 'react';
import styles from '@/styles/Article.module.css';

/**
 * WAI-ARIA Carousel (Grouped Slides) Pattern
 * https://www.w3.org/WAI/ARIA/apg/patterns/carousel/
 */
export default function Gallery({ images, label }) {
  const [index, setIndex] = useState(0);
  const regionId = useId();
  const liveRef = useRef(null);

  if (!images?.length) return null;

  const isSingle = images.length === 1;
  const current = images[index];

  const goTo = (i) => {
    const next = (i + images.length) % images.length;
    setIndex(next);
    if (liveRef.current) {
      liveRef.current.textContent = `Слайд ${next + 1} из ${images.length}: ${images[next].alt}`;
    }
  };

  // Одиночное изображение — просто figure
  if (isSingle) {
    return (
      <figure className={styles.figure}>
        <img src={current.src} alt={current.alt} className={styles.figureImage} loading="lazy" />
        <figcaption className={styles.figcaption}>Фото: {current.credit}</figcaption>
      </figure>
    );
  }

  return (
    <section
      role="region"
      aria-roledescription="карусель"
      aria-label={label}
      className={styles.carousel}
    >
      <div
        id={regionId}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        ref={liveRef}
      />

      <div className={styles.carouselSlide}>
        <figure
          role="group"
          aria-roledescription="слайд"
          aria-label={`${index + 1} из ${images.length}`}
          className={styles.figure}
        >
          <img
            src={current.src}
            alt={current.alt}
            className={styles.figureImage}
            loading="lazy"
          />
          <figcaption className={styles.figcaption}>Фото: {current.credit}</figcaption>
        </figure>
      </div>

      <div className={styles.carouselControls}>
        <button
          type="button"
          className={styles.carouselBtn}
          onClick={() => goTo(index - 1)}
          aria-label="Предыдущий слайд"
          aria-controls={regionId}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M12 4 L6 10 L12 16" stroke="currentColor" strokeWidth="1.8"
                  fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          role="tablist"
          aria-label="Выбор слайда"
          className={styles.carouselDots}
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Слайд ${i + 1}`}
              tabIndex={i === index ? 0 : -1}
              className={`${styles.carouselDot} ${i === index ? styles.carouselDotActive : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.carouselBtn}
          onClick={() => goTo(index + 1)}
          aria-label="Следующий слайд"
          aria-controls={regionId}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M8 4 L14 10 L8 16" stroke="currentColor" strokeWidth="1.8"
                  fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}