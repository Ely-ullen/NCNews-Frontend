import "../CSSComponets/singleArticle.css";
import { fetchSingleArticle } from "../api";
import Votes from "./Votes";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Moment from "moment";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchSingleArticle(article_id).then((articleRes) => {
      setArticle(articleRes);
    });
  }, []);

  return (
    <>
      <div
        className="singleArticlePanel"
        key={article.article_id}
        value={article.article_id}
      >
        <section value={article.article_id}>
          <h2 className="singlearticleHeader" value={article.article_id}>
            {article.title}
          </h2>
          <p value={article.article_id}>
            Author: {article.author} <br />
            Date added:{" "}
            {Moment(article.created_at).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
          <hr></hr>
          <article className="body">{article.body}</article>
          <hr></hr>

          <Votes articleId={article_id} />
        </section>
      </div>
      <Comments articleId={article_id} />
    </>
  );
};

export default SingleArticle;
