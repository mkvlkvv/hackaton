// src/pages/article/[slug].jsx
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticlePage from '@/components/article/ArticlePage';
import { ARTICLES } from '@/mocks/articles';
import { ARTICLE_CONTENT } from '@/mocks/articles';

export default function ArticleRoute({ meta, content }) {
  if (!meta) return null;

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

// Извлекаем slug из link: '/article/polyarnyy' → 'polyarnyy'
function extractSlug(link) {
  return link.replace(/^\/article\//, '').replace(/\/$/, '');
}

export async function getStaticPaths() {
  const paths = ARTICLES.map((article) => ({
    params: { slug: extractSlug(article.link) },
  }));

  return {
    paths,
    fallback: false, // для статического экспорта — только false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const meta = ARTICLES.find((a) => extractSlug(a.link) === slug) || null;
  const content = ARTICLE_CONTENT[slug] || null;

  if (!meta) {
    return { notFound: true };
  }

  return {
    props: { meta, content },
  };
}