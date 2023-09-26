import React from 'react';

const Article = ({ article }) => {
  return (
    <div>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
    </div>
  )
}

export default Article;