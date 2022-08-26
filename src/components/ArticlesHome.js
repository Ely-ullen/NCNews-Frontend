import "../CSSComponets/ArticlesHome.css";
import { fetchArticlesData } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Moment from "moment";

const ArticlesHome = () => {
  const [articlesData, setarticlesData] = useState([]);
  const [order, setOrder] = useState("DESC");
  const [sortBy, setsortBy] = useState("votes");

  useEffect(() => {
    fetchArticlesData(sortBy, order).then((articles) => {
      setarticlesData(articles);
    });
  }, [sortBy, order]);

  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(`/article/${event}`);
  };

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSortByChange = (event) => {
    setsortBy(event.target.value);
    // orderDisplayed = event.target.value;
  };

  return (
    <>
      <nav className="Filters">
        <select class="select" value={sortBy} onChange={handleSortByChange}>
          <option value="created_at">date added</option>
          <option value="author">author</option>
          <option value="title">title</option>
          <option value="body">body</option>
          <option value="topic">topic</option>
          <option value="votes">votes</option>
        </select>

        <select class="select" value={order} onChange={handleChange}>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </nav>
      <br></br>
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
