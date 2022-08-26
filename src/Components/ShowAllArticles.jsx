import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchAllArticleData } from "../utils/api";
import ArticleListItem from "./ArticleListItem";

const ShowAllArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sortBy = searchParams.get("sort_by");
    const order = searchParams.get("order");
    fetchAllArticleData(sortBy, order).then((dataFromApi) => {
      setAllArticles(dataFromApi);
    });
  }, [searchParams]);

  return (
    <ul className="Article__ul--list-item-parent">
      {allArticles.map((article) => {
        return <ArticleListItem article={article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default ShowAllArticles;
