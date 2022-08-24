import "../CSSComponets/ArticlesHome.css";
import { fetchArticlesData } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Moment from "moment";

const ArticlesHome = () => {
  const [articlesData, setarticlesData] = useState([]);
  //const [filteredState, setFilteredState] = useState("");

  useEffect(() => {
    fetchArticlesData().then((articles) => {
      setarticlesData(articles);
    });
  }, []);

  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(`/article/${event}`);
  };

  return (
    <>
      {articlesData.map((article) => {
        return (
          <div
            className="ArticlesPanel"
            key={article.article_id}
            value={article.article_id}
            onClick={() => {
              handleClick(article.article_id);
            }}
          >
            <section>
              <h2 className="articleHeader" value={article.article_id}>
                {article.title}
              </h2>
              <p id="articleDetails">
                Author: {article.author} <br />
                Date added:{" "}
                {Moment(article.created_at).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default ArticlesHome;
