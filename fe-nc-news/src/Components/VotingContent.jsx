import { useState } from "react";
import { patchVotesInArticleDec, patchVotesInArticleInc } from "../utils/api";

const VotingContent = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [error, setError] = useState(null);

  console.log(voteCount);

  const handleVoteInc = async () => {
    try {
      setVoteCount((currVoteCount) => currVoteCount + 1);
      setError(null);
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
      await patchVotesInArticleDec(article_id);
    } catch (error) {
      setVoteCount((currVoteCount) => currVoteCount + 1);
      setError(
        "Oops!! Something went wrong! Please try again in a few minutes"
      );
    }
  };

  return (
    <div>
      <h4>Votes: {voteCount}</h4>
      <button onClick={handleVoteInc}>Upvote</button>
      <button onClick={handleVoteDec}>Downvote</button>
      <p>{error}</p>
    </div>
  );
};

export default VotingContent;
