import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topic from "./components/Topic";
import SingleArticle from "./components/SingleArticle";
import UserLoginContext from "./context/UserLoginContext"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [user, setUser] = useState("");

  return (
    <UserLoginContext.Provider value="grumpy19">
    <BrowserRouter>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Articles
                currentArticles={currentArticles}
                setCurrentArticles={setCurrentArticles}
              />
            }
          />
          <Route
            path="/topics/:topic"
            element={
              <Topic
                currentArticles={currentArticles}
                setCurrentArticles={setCurrentArticles}
              />
            }
          />
          <Route
            path="/articles/:article_id"
            element={<SingleArticle user={user} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </UserLoginContext.Provider>
  );
}
export default App;
