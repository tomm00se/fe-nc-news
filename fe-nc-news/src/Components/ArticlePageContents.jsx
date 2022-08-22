const ArticlePageContents = ({ articlePage }) => {
  return (
    <div className="Article-Page__div--parent">
      <h3 className="Article-Page__title">{articlePage.title}</h3>
      <h4 className="Article-Page__username">By user: {articlePage.author}</h4>
      <div className="Article-Page__body">
        <p>{articlePage.body}</p>
      </div>
      <time className="Article-Page__timestamp">
        Published on: {articlePage.created_at}
      </time>
      <h4 className="Article-Page__topic">Topic: {articlePage.topic}</h4>
      <h4 className="Article-Page__vote-count">Votes: {articlePage.votes}</h4>
    </div>
  );
};

export default ArticlePageContents;
