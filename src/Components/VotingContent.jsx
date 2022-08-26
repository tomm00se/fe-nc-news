import { useState } from "react";
import { patchVotesInArticleDec, patchVotesInArticleInc } from "../utils/api";

const VotingContent = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [error, setError] = useState(null);
  const [isUpvoteDisabled, setIsUpvoteDisabled] = useState(false);
  const [isDownvoteDisabled, setIsDownvoteDisabled] = useState(false);

  const handleVoteInc = async () => {
    try {
      setVoteCount((currVoteCount) => currVoteCount + 1);
      setError(null);
      setIsUpvoteDisabled(true);
      setIsDownvoteDisabled(false);
      await patchVotesInArticleInc(article_id);
    } catch (error) {
      setVoteCount((currVoteCount) => currVoteCount - 1);
      setError(
        "Oops!! Something went wrong! Please try again in a few minutes"
      );
    }
  };

  const handleVoteDec = async () => {
    try {
      setVoteCount((currVoteCount) => currVoteCount - 1);
      setError(null);
      setIsUpvoteDisabled(false);
      setIsDownvoteDisabled(true);
      await patchVotesInArticleDec(article_id);
    } catch (error) {
      setVoteCount((currVoteCount) => currVoteCount + 1);
      setError(
        "Oops!! Something went wrong! Please try again in a few minutes"
      );
    }
  };

  return (
    <div className="Article-Page__vote-count--div">
      <h4 className="Article-Page__vote-count--h4">Votes: {voteCount}</h4>
      <button
        className="Article-Page__vote-count-button--upvote"
        disabled={isUpvoteDisabled}
        onClick={handleVoteInc}
      >
        Upvote
      </button>
      <button
        className="Article-Page__vote-count-button--downvote"
        disabled={isDownvoteDisabled}
        onClick={handleVoteDec}
      >
        Downvote
      </button>
      <p className="Article-page__vote-count-error">{error}</p>
    </div>
  );
};

export default VotingContent;
