import "./App.css";
import Header from "./components/Header";
import ArticlesHome from "./components/ArticlesHome";
import SingleTopic from "./components/SingleTopic";
import SingleArticle from "./components/SingleArticle";
import TopicNavBar from "./components/TopicNavBar";
import { CurrentUserContext } from "./contexts/currentUser";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d…r-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <TopicNavBar />
          <Routes>
            <Route path="/" element={<ArticlesHome />} />
            <Route path="/topics/:topic_slug" element={<SingleTopic />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
