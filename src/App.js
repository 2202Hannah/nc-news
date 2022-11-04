import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Articles from "./components/Articles";
import Topic from "./components/Topic";
import SingleArticle from "./components/SingleArticle";
import NotFound from "./components/NotFound";

function App() {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Articles
                currentArticles={currentArticles}
                setCurrentArticles={setCurrentArticles}
                sort={sort}
                setSort={setSort}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/topics/:topic"
            element={
              <Topic
                currentArticles={currentArticles}
                setCurrentArticles={setCurrentArticles}
                sort={sort}
                setSort={setSort}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
