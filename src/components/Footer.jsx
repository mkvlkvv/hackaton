import styles from '@/styles/Page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <section className={styles.footerColContacts} aria-labelledby="footer-contacts">
            <h2 id="footer-contacts" className={styles.footerSectionTitle}>Контакты</h2>
            <a className={styles.footerLink} href="mailto:press.rt@nationalpriority.ru">
              press.rt@nationalpriority.ru
            </a>

            <address className={styles.footerOwner}>
              <span>© Минэкономразвития РФ</span>
              <span>Адрес: Пресненская наб., д. 10, стр. 2, г. Москва, 123112</span>
              <span>
                E-mail:{' '}
                <a className={styles.footerLink} href="mailto:mineconom@economy.gov.ru">
                  mineconom@economy.gov.ru
                </a>
              </span>
              <span style={{ marginTop: 8 }}>
                Цитирование текстовых материалов портала разрешено при обязательном указании активной
                гиперссылки на источник{' '}
                <a className={styles.footerLink} href="/">путешествуем.рф</a>.
                Иное использование материалов без письменного согласия правообладателя запрещено.
              </span>
            </address>
          </section>

          <a href="/" className={styles.footerLogo} aria-label="На главную">
            <span className={styles.footerLogoIcon} aria-hidden="true">П</span>
            <span className={styles.footerLogoText}>Туризм и&nbsp;гостеприимство</span>
          </a>

          <nav className={styles.footerSocials} aria-label="Социальные сети">
            <a href="https://vk.com/puteshestvuem_rf" className={styles.footerSocial} aria-label="ВКонтакте">VK</a>
            <a href="https://ok.ru/puteshestvuem.rf" className={styles.footerSocial} aria-label="Одноклассники">OK</a>
            <a href="https://max.ru/puteshestvuem_rf" className={styles.footerSocial} aria-label="MAX">M</a>
          </nav>
        </div>

        <p className={styles.footerSupport}>
          Нашли ошибку? Напишите нам на почту{' '}
          <a href="mailto:support.rt@nationalpriority.ru">support.rt@nationalpriority.ru</a>
        </p>
      </div>
    </footer>
  );
}