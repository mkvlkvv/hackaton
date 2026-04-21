import styles from '@/styles/Article.module.css';
import ObjectCard from './ObjectCard';
import PlacesCarousel from './PlacesCarousel';

export default function DayBlock({ day }) {
  return (
    <section aria-labelledby={day.id} className={styles.day}>
      <h2 id={day.id} className={styles.dayTitle}>{day.title}</h2>
      <p className={styles.paragraph}>{day.description}</p>

      {day.objects.map((obj) => (
        <ObjectCard key={obj.id} obj={obj} />
      ))}

      {day.hotels?.length > 0 && (
        <PlacesCarousel
          title="Где остановиться"
          items={day.hotels}
          type="hotel"
          idPrefix={`${day.id}-hotels`}
        />
      )}
      {day.restaurants?.length > 0 && (
        <PlacesCarousel
          title="Где поесть"
          items={day.restaurants}
          type="restaurant"
          idPrefix={`${day.id}-rest`}
        />
      )}
    </section>
  );
}