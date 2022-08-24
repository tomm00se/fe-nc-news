import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlePage from "./Components/ArticlePage";
import UserContext from "./Components/contexts/Users";
import Header from "./Components/Header";
import ShowAllArticles from "./Components/ShowAllArticles";
import ShowArticlesByTopic from "./Components/ShowArticlesByTopic";
import ToggleUsers from "./Components/ToggleUsers";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d…r-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App"></div>
        <Header />
        <Routes>
          <Route path="/users" element={<ToggleUsers />} />
          <Route path="/" element={<ShowAllArticles />} />
          <Route path="/news/:topic" element={<ShowArticlesByTopic />} />
          <Route path="/news/article/:article_id" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
