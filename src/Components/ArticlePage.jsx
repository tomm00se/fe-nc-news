import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlePageById } from "../utils/api";
import ArticlePageContents from "./ArticlePageContents";
import ErrorHandler from "./ErrorHandler";

const ArticlePage = () => {
  const [articlePage, setArticlePage] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticlePageById(article_id).then((dataFromApi) => {
      setArticlePage(dataFromApi);
    });
  }, [article_id]);

  console.log(articlePage);

  if (!articlePage || articlePage.msg === "Not Found!") {
    return <ErrorHandler />;
  }

  return <ArticlePageContents articlePage={articlePage} />;
};

export default ArticlePage;
