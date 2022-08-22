import { useEffect, useState } from "react";
import { fetchAllArticleData } from "../utils/api";
import ArticleListItem from "./ArticleListItem";

const ShowAllArticles = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetchAllArticleData().then((dataFromApi) => {
      setAllArticles(dataFromApi);
      console.log(dataFromApi);
    });
  }, []);

  return (
    <ul className="Article__list-item-parent">
      {allArticles.map((article) => {
        return <ArticleListItem article={article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default ShowAllArticles;
