import { Link } from "react-router-dom";

const ArticleListItem = ({ article }) => {
  return (
    <Link to={`/news/article/${article.article_id}`}>
      <li className="Article__list-item-card">
        <h3>
          {article.title} #{article.article_id}
        </h3>
        <h4>
          By: {article.author} - Votes:{article.votes}
        </h4>
      </li>
    </Link>
  );
};

export default ArticleListItem;
