import { fetchTopics } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSSComponets/topicNavBar.css";

const TopicNavBar = () => {
  const [topicsNav, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicData) => {
      setTopics(topicData);
    });
  }, []);

  return (
    <>
      <nav className="navBar">
        <ul className="topicList">
          {topicsNav.map((topic) => {
            return (
              <li className="topiclistItem" key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
              </li>
            );
          })}
          <li className="topiclistItem">
            <Link to="/">all topics</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopicNavBar;
