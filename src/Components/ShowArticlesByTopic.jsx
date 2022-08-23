import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleDataByTopic } from "../utils/api";
import ArticleListItem from "./ArticleListItem";

const ShowArticlesByTopic = () => {
  const [articleByTopic, setArticleByTopic] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticleDataByTopic(topic).then((queriedDataFromApi) => {
      setArticleByTopic(queriedDataFromApi);
    });
  }, [topic]);

  return (
    <ul className="Topic__list-item-parent">
      {articleByTopic.map((article) => {
        return <ArticleListItem article={article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default ShowArticlesByTopic;
