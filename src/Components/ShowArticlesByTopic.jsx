import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleDataByTopic } from "../utils/api";
import ArticleListItem from "./ArticleListItem";
import ErrorHandler from "./ErrorHandler";

const ShowArticlesByTopic = () => {
  const [articleByTopic, setArticleByTopic] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticleDataByTopic(topic).then((queriedDataFromApi) => {
      setArticleByTopic(queriedDataFromApi);
    });
  }, [topic]);

  if (!articleByTopic || articleByTopic.msg === "Not Found!") {
    return <ErrorHandler />;
  }

  return (
    <ul className="Topic__list-item-parent">
      {articleByTopic.map((article) => {
        return <ArticleListItem article={article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default ShowArticlesByTopic;
