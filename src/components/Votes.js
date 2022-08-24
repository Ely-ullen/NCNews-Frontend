import "../CSSComponets/votes.css";
import { patchVotes } from "../api";
import { useEffect, useState } from "react";
import { fetchVotes } from "../api";

const Votes = ({ articleId }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [click, setClick] = useState(true);
  const [buttonName, setButtonName] = useState("false");
  useEffect(() => {
    fetchVotes(articleId).then((votes) => {
      setVoteCount(votes);
    });
  }, [articleId]);

  const handleClick = () => {
    if (click) {
      setVoteCount((currVotes) => currVotes + 1);
      setButtonName("true");
      patchVotes({ inc_votes: +1 }, articleId);
    }
    if (click === false) {
      setVoteCount((currVotes) => currVotes - 1);
      setButtonName("false");
      patchVotes({ inc_votes: -1 }, articleId);
    }
    setClick(!click);
  };

  return (
    <>
      <span>Votes:{voteCount} </span>

      <button className={buttonName} onClick={handleClick}>
        Vote!
      </button>
    </>
  );
};

export default Votes;
