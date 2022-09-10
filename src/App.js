import "./App.css";
import Header from "./components/Header";
import ArticlesHome from "./components/ArticlesHome";
import Errors from "./components/Errors";
import SingleArticle from "./components/SingleArticle";
import { CurrentUserContext } from "./contexts/currentUser";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  //user context
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
          <Routes>
            {/* <Route element={<SomeComponent />} path="some-route/*" /> */}
            <Route path="/" element={<ArticlesHome />} />
            {/* <Route path="/:sort_by" element={<ArticlesHome />} />
            <Route path="/:order_by" element={<ArticlesHome />} /> */}
            <Route path="/:sort_by/:order_by" element={<ArticlesHome />} />
            <Route path="/article/:article_id" element={<SingleArticle />} />
            <Route path="/*" element={<Errors />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
