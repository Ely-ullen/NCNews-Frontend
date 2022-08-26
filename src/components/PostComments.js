import "../CSSComponets/postComment.css";
import { useState } from "react";

import NewComment from "./NewComment";

const PostComments = ({ articleId, commentsData, setCommentsData }) => {
  const [click, setClick] = useState(true);
  const [commentBox, setcommentBox] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    if (click) {
      setcommentBox(true);
      setSuccess(false);
    }
    setClick(!click);
    setcommentBox(!commentBox);
  };

  return (
    <>
      {success === true && (
        <span id="successMsg">
          <b>Your comment has been posted</b>
        </span>
      )}
      <button className="postButton" onClick={handleClick}>
        + add a comment
      </button>
      {commentBox === true && (
        <div className="commentPanel">
          <NewComment
            articleId={articleId}
            commentsData={commentsData}
            setCommentsData={setCommentsData}
            setcommentBox={setcommentBox}
            setSuccess={setSuccess}
          />
        </div>
      )}
    </>
  );
};

export default PostComments;
