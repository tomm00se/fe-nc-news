import { useState } from "react";
import { deleteCommentByCommentId } from "../utils/api";

const DeleteComment = ({ comment_id, deleteComment }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const deleted_id = comment_id;

  const handleDeleteClick = async () => {
    setIsDisabled(true);
    await deleteCommentByCommentId(deleted_id);

    deleteComment(deleted_id);
    setIsDisabled(false);
  };

  return (
    <div>
      <button disabled={isDisabled} onClick={handleDeleteClick}>
        Delete this comment!
      </button>
    </div>
  );
};

export default DeleteComment;
