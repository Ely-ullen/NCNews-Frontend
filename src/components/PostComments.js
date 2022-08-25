import "../CSSComponets/postComment.css";
import { useEffect, useState } from "react";
import Moment from "moment";
import { CommentPoster } from "../api";
import NewComment from "./NewComment";

const PostComments = ({ articleId, commentsData, setCommentsData }) => {
  const [click, setClick] = useState(true);
  const [commentBox, setcommentBox] = useState(false);

  const handleClick = () => {
    if (click) {
      setcommentBox(true);
    }
    setClick(!click);
    setcommentBox(!commentBox);
  };

  return (
    <>
      <button className="postButton" onClick={handleClick}>
        + add a comment
      </button>
      {commentBox === true && (
        <div className="commentPanel">
          <NewComment
            articleId={articleId}
            commentsData={commentsData}
            setCommentsData={setCommentsData}
          />
        </div>
      )}
    </>
  );
};

export default PostComments;
