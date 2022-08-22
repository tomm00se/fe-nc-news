import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlePageById } from "../utils/api";
import ArticlePageContents from "./ArticlePageContents";

const ArticlePage = () => {
  const [articlePage, setArticlePage] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticlePageById(article_id).then((dataFromApi) => {
      setArticlePage(dataFromApi);
    });
  }, [article_id]);

  return <ArticlePageContents articlePage={articlePage} />;
};

export default ArticlePage;
