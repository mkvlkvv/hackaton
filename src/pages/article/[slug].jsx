import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticlePage from '@/components/article/ArticlePage';
import { ARTICLES } from '@/mocks/articles';
import { ARTICLE_CONTENT } from '@/mocks/articles';

export default function ArticleRoute() {
  const { query } = useRouter();
  const slug = query.slug;

  if (!slug) return null;

  const meta = ARTICLES.find((a) => a.link === `/article/${slug}`);
  const content = ARTICLE_CONTENT[slug];

  if (!meta) {
    return (
      <>
        <Head><title>Статья не найдена</title></Head>
        <Header />
        <main id="main" tabIndex={-1} style={{ padding: '4rem 1rem', textAlign: 'center', minHeight: '60vh' }}>
          <h1>Статья не найдена</h1>
          <p style={{ marginTop: '1rem' }}>
            <a href="/" style={{ color: '#185fa5' }}>Вернуться на главную</a>
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{meta.title} — Путешествуем.рф</title>
        <meta name="description" content={meta.description} />
      </Head>
      <a href="#main" className="skip-link">Перейти к содержимому</a>
      <Header />
      <ArticlePage meta={meta} content={content} />
      <Footer />
    </>
  );
}