import { useState } from "react";
import { deleteCommentByCommentId } from "../utils/api";

const DeleteComment = ({ comment_id, deleteComment }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(null);

  const deleted_id = comment_id;

  const handleDeleteClick = async () => {
    setIsDisabled(true);
    try {
      await deleteCommentByCommentId(deleted_id);
      deleteComment(deleted_id);
      setIsDisabled(false);
    } catch (error) {
      setIsError(
        "Oops! It looks like you are not connected. Please sign in and try again"
      );
    }
    setIsDisabled(false);
  };

  return (
    <div>
      <button disabled={isDisabled} onClick={handleDeleteClick}>
        Delete this comment!
      </button>
      <p>{isError}</p>
    </div>
  );
};

export default DeleteComment;
