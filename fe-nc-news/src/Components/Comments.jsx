import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import CommentsListItem from "./CommentListItem";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((dataFromApi) => {
      setComments(dataFromApi.comments);
    });
  }, [article_id]);

  return (
    <div className="Commnets__div">
      <ul className="Comments__ul--parent">
        {comments.map((comment) => {
          return <CommentsListItem comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
