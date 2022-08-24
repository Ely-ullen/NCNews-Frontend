import { fetchArticlesByTopic } from "../api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Moment from "moment";

const SingleTopic = () => {
  const [topicData, setTopicData] = useState([]);
  const { topic_slug } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic_slug).then((articles) => {
      setTopicData(articles);
    });
  }, [topic_slug]);

  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(`/article/${event}`);
  };

  return (
    <>
      {topicData.map((article) => {
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
              <h2 className="ArticleHeader">{article.title}</h2>
              <p>
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

export default SingleTopic;
