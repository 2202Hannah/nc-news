import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../utils";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((data) => {
      const topicsArray = data.map((topic) => topic.slug);
      setTopics(topicsArray);
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
        {/* <img
          className="menu_img"
          src={require("./images/menu.jpg")}
          alt="hamburger menu icon"
          onClick={handleOpen}
        /> */}
        <button onClick={handleOpen}>Menu</button>
      {open ? (
        <ul className="menu">
          {topics.map((topic, index) => {
            return (
              <li className="menu-item">
                <Link key={index} to={`/topics/${topic}`} topic={topic}>
                  <p className="topicList">{topic}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Menu;

// article on how to get menu to close when use clicks outside https://www.robinwieruch.de/react-hook-detect-click-outside-component/
