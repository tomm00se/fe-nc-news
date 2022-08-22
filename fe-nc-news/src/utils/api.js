exports.fetchAllArticleData = async () => {
  const fetched = await fetch(
    "https://mooses-backend-news-project.herokuapp.com/api/articles"
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};
