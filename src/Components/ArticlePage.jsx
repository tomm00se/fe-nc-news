import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlePageById } from "../utils/api";
import ArticlePageContents from "./ArticlePageContents";
import ErrorHandler, { ErrorHandler400 } from "./ErrorHandler";

const ArticlePage = () => {
  const [articlePage, setArticlePage] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const dataFromApi = await fetchArticlePageById(article_id);
      setArticlePage(dataFromApi);
    }
    fetchData();
  }, []);

  if (!articlePage) {
    return null;
  }

  if (articlePage.msg === "Not Found!") {
    return <ErrorHandler />;
  }

  if (articlePage.msg === "Bad Request!") {
    return <ErrorHandler400 />;
  }

  return <ArticlePageContents articlePage={articlePage} />;
};

export default ArticlePage;
