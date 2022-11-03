import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";
import { fetchTopics } from "../utils";

const SortBy = () => {
  const sortByArray = [created_at, comment_count, votes]

  return (
    <div className="sortBy">
      {sortByArray.map((sorter, index) => {
        return (
          <Link key={index} to={`/topics/${topic}`} topic={topic}>
            <p className="topicList">{topic}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Topics;