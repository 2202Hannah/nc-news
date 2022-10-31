import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentArticles, setCurrentArticles] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/articles"
              element={
                <Articles
                  currentArticles={currentArticles}
                  setCurrentArticles={setCurrentArticles}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
