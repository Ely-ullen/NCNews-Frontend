import "../CSSComponets/ArticlesHome.css";
import { fetchArticlesData } from "../api";
import { useEffect, useState } from "react";
import TopicNavBar from "./TopicNavBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import Moment from "moment";

const ArticlesHome = () => {
  //States

  const [articlesData, setarticlesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortParam = searchParams.get("sort_by");
  const orderParam = searchParams.get("order_by");
  const topicParam = searchParams.get("topic");

  useEffect(() => {
    fetchArticlesData(sortParam, orderParam, topicParam).then((articles) => {
      setarticlesData(articles);
    });
  }, [sortParam, orderParam, topicParam]);

  const handleClick = (event) => {
    navigate(`/article/${event}`);
  };

  const handleOrderChange = (event) => {
    setSearchParams(searchParams.set("order_by", event.target.value));
  };

  const handleSortByChange = (event) => {
    setSearchParams(searchParams.set("sort_by", event.target.value));
  };

  const handleTopic = (event) => {
    setSearchParams(searchParams.set("topic", event.target.value));
  };

  return (
    <>
      <TopicNavBar handleTopic={handleTopic} />

      <nav className="Filters">
        <select
          className="select"
          value={searchParams.get("sort_by") || ""}
          onChange={handleSortByChange}
        >
          <option value="created_at">date added</option>
          <option value="author">author</option>
          <option value="title">title</option>
          <option value="votes">votes</option>
        </select>

        <select
          className="select"
          value={searchParams.get("order_by") || ""}
          onChange={handleOrderChange}
        >
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
