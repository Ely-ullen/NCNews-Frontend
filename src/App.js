import "./App.css";
import Header from "./components/Header";
import ArticlesHome from "./components/ArticlesHome";
import SingleTopic from "./components/SingleTopic";
import SingleArticle from "./components/SingleArticle";
import TopicNavBar from "./components/TopicNavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
