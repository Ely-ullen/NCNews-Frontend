import { fetchTopics } from "../api";
import { useEffect, useState } from "react";
import "../CSSComponets/topicNavBar.css";


const TopicNavBar = ({ handleTopic }) => {
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
              <button
                className="topiclistItem"
                value={topic.slug}
                key={topic.slug}
                onClick={handleTopic}
              >
                {topic.slug}
              </button>
            );
          })}
          <button className="topiclistItem" value={""} onClick={handleTopic}>
            All Topics
          </button>
        </ul>
      </nav>
    </>
  );
};

export default TopicNavBar;
