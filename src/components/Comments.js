import "../CSSComponets/comments.css";
import { useEffect, useState } from "react";
import Moment from "moment";
import { fetchCommentsData } from "../api";

const Comments = ({ articleId }) => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    fetchCommentsData(articleId).then((comments) => {
      comments.sort((a, b) => {
        let da = new Date(a.created_at),
          db = new Date(b.created_at);
        return db - da;
      });
      setCommentsData(comments);
    });
  }, []);

  return (
    <>
      <h2>Comments</h2>
      <div className="commentsPanel">
        {" "}
        {commentsData.map((comment) => {
          return (
            <div className="comment">
              <p className="name">
                {comment.name}{" "}
                <span id="dateSpan">
                  {Moment(comment.created_at).fromNow()}
                </span>
              </p>

              <p className="body">{comment.body}</p>

              <span> Likes: {comment.votes}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Comments;
