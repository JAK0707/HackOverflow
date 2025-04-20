import React, { useState } from 'react';

const UpvoteButton = ({ initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleUpvote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
      // TODO: Send vote to backend
    }
  };

  return (
    <button
      className={`btn btn-sm ${hasVoted ? 'btn-success' : 'btn-outline-success'}`}
      onClick={handleUpvote}
    >
      👍 {votes}
    </button>
  );
};

export default UpvoteButton;
