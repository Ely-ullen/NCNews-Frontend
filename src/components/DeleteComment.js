import "../CSSComponets/deleteComment.css";
import { commentDeleter } from "../api";
import { useState } from "react";

const DeleteComment = ({ commentId, commentsData, setCommentsData }) => {
  const [deleteError, setError] = useState(false);

  const handleClick = () => {
    commentDeleter(commentId)
      .then(() => {
        let optimisticArr = commentsData.filter((comment) => {
          return comment.comment_id !== commentId;
        });

        setCommentsData(optimisticArr);
      })
      .catch(() => setError(true));
  };

  return (
    <>
      {deleteError && <p className="deleteMsg">! comment not deleted</p>}
      <button className="deleteButton" onClick={handleClick}>
        DELETE
      </button>
    </>
  );
};

export default DeleteComment;
