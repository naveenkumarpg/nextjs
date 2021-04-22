import React from 'react';

export default function ArticleDetail({ articleDetails }) {
  return (
    <div>
      <h1>{articleDetails.title}</h1>
      <p>{articleDetails.body}</p>
      <a href="/articles"> &lt; Go back </a>
      <br />
      <br />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `http://localhost:3000/api/articles/${context.params.id}`
  );

  const articleDetails = await response.json();

  return {
    props: {
      articleDetails
    }
  };
};
