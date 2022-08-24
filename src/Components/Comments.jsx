import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import CommentsListItem from "./CommentListItem";
import PostComment from "./PostComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((dataFromApi) => {
      setComments(dataFromApi.comments);
    });
  }, [article_id]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const reversedComments = [...comments].reverse();

  return (
    <div className="Commnets__div">
      <PostComment article_id={article_id} onNewComment={addComment} />
      <ul className="Comments__ul--parent">
        {reversedComments.map((comment) => {
          return (
            <CommentsListItem key={comment.comment_id} comment={comment} />
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
