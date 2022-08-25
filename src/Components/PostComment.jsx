import { useContext, useState } from "react";
import { postCommentToComments } from "../utils/api";
import UserContext from "./contexts/Users";

const PostComment = ({ article_id, onNewComment }) => {
  const [commentBody, setCommentBody] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isError, setIsError] = useState(null);
  const { user } = useContext(UserContext);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!commentBody) {
        return;
      } else {
        setIsDisabled(true);
        const newComment = await postCommentToComments(
          article_id,
          user.username,
          commentBody
        );
        setCommentBody("");
        onNewComment(newComment);
      }
    } catch (error) {
      setIsError(
        "Oh no!! It looks like you are offline :( Please check your internet connection and try again!"
      );
    }
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
        <p>{isError}</p>
        <input type="submit" value="Submit" disabled={isDisabled} />
      </form>
    </div>
  );
};

export default PostComment;
