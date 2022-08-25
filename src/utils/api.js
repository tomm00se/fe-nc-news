const { default: axios } = require("axios");

export const fetchAllArticleData = async (optionalSortBy, optionalOrder) => {
  const sortBy = optionalSortBy || "created_at";
  const order = optionalOrder || "desc";

  const fetched = await fetch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles?sort_by=${sortBy}&order=${order}`
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};

export const fetchArticleDataByTopic = async (topic) => {
  const fetched = await fetch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles?topic=${topic}`
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};

export const fetchArticlePageById = async (article_id) => {
  const fetched = await fetch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles/${article_id}`
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};

export const patchVotesInArticleInc = async (article_id) => {
  await axios.patch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes: 1,
    }
  );
};

export const patchVotesInArticleDec = async (article_id) => {
  await axios.patch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes: -1,
    }
  );
};

export const fetchCommentsByArticleId = async (article_id) => {
  const fetched = await fetch(
    `https://mooses-backend-news-project.herokuapp.com/api/articles/${article_id}/comments`
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};

export const fetchAllUsers = async () => {
  const fetched = await fetch(
    "https://mooses-backend-news-project.herokuapp.com/api/users"
  );
  const parsedFetch = fetched.json();
  return parsedFetch;
};

export const postCommentToComments = async (article_id, username, body) => {
  const response = await axios.post(
    `https://mooses-backend-news-project.herokuapp.com/api/articles/${article_id}/comments`,
    {
      username,
      body,
    }
  );
  return response.data;
};

export const deleteCommentByCommentId = async (comment_id) => {
  await axios.delete(
    `https://mooses-backend-news-project.herokuapp.com/api/comments/${comment_id}`
  );
};
