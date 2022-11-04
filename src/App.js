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
  const [user, setUser] = useState("grumpy19");

  return (
    <UserLoginContext.Provider value={{user, setUser}}>
    <BrowserRouter>
      <div className="App">
        <Header/>
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
            element={<SingleArticle />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </UserLoginContext.Provider>
  );
}
export default App;
