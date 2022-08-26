import "../CSSComponets/comments.css";
import { useEffect, useState } from "react";
import Moment from "moment";
import { fetchCommentsData } from "../api";
import PostComments from "./PostComments";
import NewComment from "./NewComment";

const Comments = ({ articleId }) => {
  const [commentsData, setCommentsData] = useState([]);
  // const [newComment, setnewComment] = useState("");

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
      <PostComments
        articleId={articleId}
        commentsData={commentsData}
        setCommentsData={setCommentsData}
      />
      <div className="commentsPanel">
        {" "}
        {commentsData.map((comment) => {
          return (
            <div className="comment" key={comment.comment_id}>
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
