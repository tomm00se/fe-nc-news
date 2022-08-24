import { useContext, useState } from "react";
import { postCommentToComments } from "../utils/api";
import UserContext from "./contexts/Users";

const PostComment = ({ article_id, onNewComment }) => {
  const [commentBody, setCommentBody] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { user } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!commentBody) {
      return;
    }

    setIsDisabled(true);
    const newComment = await postCommentToComments(
      article_id,
      user.username,
      commentBody
    );
    setCommentBody("");
    onNewComment(newComment);
    setIsDisabled(false);
  };

  const handleOnChange = (event) => {
    setCommentBody(event.target.value);
  };

  return (
    <div className="Comment__input-form">
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input
            type="text"
            value={commentBody}
            disabled={isDisabled}
            onChange={handleOnChange}
          />
        </label>
        <input type="submit" value="Submit" disabled={isDisabled} />
      </form>
    </div>
  );
};

export default PostComment;
