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
    <div className="Comment__input-form--div">
      <form className="Comment__input-form--form_box" onSubmit={handleSubmit}>
        <label className="Comment__input-form--label" htmlFor="comment">
          Comment:
        </label>
        <textarea
          id="comment"
          type="text"
          value={commentBody}
          disabled={isDisabled}
          onChange={handleOnChange}
        />
        <p className="Comment__input-form--error">{isError}</p>
        <input
          className="Comment__input-form--submit-button"
          type="submit"
          value="Submit"
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};

export default PostComment;
