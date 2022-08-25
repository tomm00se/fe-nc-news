import { useContext, useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import CommentsListItem from "./CommentListItem";
import UserContext from "./contexts/Users";
import DeleteComment from "./DeleteComment";
import PostComment from "./PostComment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((dataFromApi) => {
      setComments(dataFromApi.comments);
    });
  }, [article_id]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const deleteComment = (deletedId) => {
    const newComments = comments.filter(
      (comment) => comment.comment_id !== deletedId
    );
    setComments(newComments);
  };

  const reversedComments = [...comments].reverse();

  return (
    <div className="Commnets__div">
      <PostComment article_id={article_id} onNewComment={addComment} />
      <ul className="Comments__ul--parent">
        {reversedComments.map((comment) => {
          return (
            <CommentsListItem key={comment.comment_id} comment={comment}>
              {user.username === comment.author ? (
                <DeleteComment
                  comment_id={comment.comment_id}
                  article_id={article_id}
                  deleteComment={deleteComment}
                />
              ) : null}
            </CommentsListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
