import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";
import { fetchTopics } from "../utils";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(data => {
      const topicsArray = data.map(topic => topic.slug);
      setTopics(topicsArray);
    });
  }, []);

  return (
    <div className="topics">
      {topics.map((topic) => {
        return (
          <Link key={topic.id} to={`/topics/${topic}`} topic={topic}>
            <p className="topicList">{topic}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Topics;
