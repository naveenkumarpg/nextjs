import React from 'react';

export default function Articles({ articles }) {
  return (
    <div className="article-wrap">
      {articles.map((article, idx) => {
        return (
          <a className="block-link" key={idx} href={`articles/${article.id}`}>
            {article.title}
          </a>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/articles');
  const articles = await response.json();

  return { props: { articles } };
}
