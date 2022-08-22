const ArticleListItem = ({ article }) => {
  return (
    <li className="Article__list-item-card">
      <h3>
        {article.title} #{article.article_id}
      </h3>
      <h4>By: {article.author}</h4>
    </li>
  );
};

export default ArticleListItem;
