import { Link } from "react-router-dom";

const ArticleListItem = ({ article }) => {
  return (
    <Link
      className="Article__list-item-card--link"
      to={`/news/article/${article.article_id}`}
    >
      <li className="Article__list-item-card">
        <h3 className="Article__heading--title-id">
          {article.title} #{article.article_id}
        </h3>
        <h4 className="Article__sub-heading--author-votes">
          By: {article.author} - Votes:{article.votes}
        </h4>
      </li>
    </Link>
  );
};

export default ArticleListItem;
