import { useState, useContext } from "react";
import "../CSSComponets/newComment.css";
import { CommentPoster } from "../api";
import { CurrentUserContext } from "../contexts/currentUser";

const NewComment = ({
  articleId,
  setcommentBox,
  commentsData,
  setCommentsData,
  setSuccess,
}) => {
  const [commentInput, setCommentInput] = useState("empty");
  const { currentUser } = useContext(CurrentUserContext);
  const [commentError, setError] = useState(false);

  const handleItemNameBlur = (event) => {
    const inputName = event.target.value;
    if (inputName === "") {
      setCommentInput("empty");
    }
    if (inputName.length < 5) {
      setCommentInput("invalid");
    }
    if (inputName.length >= 5) {
      setCommentInput("valid");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const commentForPosting = {
      username: currentUser.username,
      body: event.target[0].value,
    };

    const optomisticComment = {
      name: currentUser.name,
      body: event.target[0].value,
      votes: 0,
    };
    if (commentInput === "valid") {
      CommentPoster(commentForPosting, articleId)
        .then(() => {
          setcommentBox(false);
          setCommentsData([optomisticComment, ...commentsData]);
          setSuccess(true);
        })

        .catch(() => {
          setError(true);
        });
    }

    return event;
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        {" "}
        <label htmlFor="newcomment">Your comment:</label>
      </p>
      {commentError && <p>Error: Comment was not posted. Please try again</p>}
      {commentInput === "empty" ||
        (commentInput === "invalid" && (
          <p>*comment must be more than 5 characters</p>
        ))}
      <textarea
        className={commentInput}
        id="newcomment"
        rows="6"
        cols="30"
        onBlur={handleItemNameBlur}
      ></textarea>

      <input className="inputButton" type="submit" value="Submit" />
    </form>
  );
};
export default NewComment;
