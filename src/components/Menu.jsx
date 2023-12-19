import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../utils";

import { Menu, MenuItem, MenuButton, FocusableItem } from "@szhsin/react-menu";

const DropdownMenu = () => {
  // const [open, setOpen] = useState(false);
  const [topics, setTopics] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchTopics().then((data) => {
      const topicsArray = data.map((topic) => topic.slug);
      setTopics(topicsArray);
    });
  }, []);

  // const handleOpen = () => {
  //   setOpen(!open);
  // };

  return (
    <Menu
      menuButton={<MenuButton>Menu</MenuButton>}
      direction="bottom"
      align="center"
      position="anchor"
      overflow="auto"
      boundingBoxPadding="10"
      viewScroll="close"
      arrow="true"
      gap="0"
      shift="12"
      onMenuChange={(e) => e.open && setFilter("")}
    >
      <FocusableItem className="filter-item">
        {({ ref }) => (
          <input
            ref={ref}
            type="text"
            placeholder="Type to filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        )}
      </FocusableItem>
      {topics
        .filter((topic) =>
          topic.toUpperCase().includes(filter.trim().toUpperCase())
        )
        .map((topic, index) => (
          <Link key={index} to={`/topics/${topic}`} topic={topic}>
            <MenuItem className="menu-item" key={topic}>
              {topic}
            </MenuItem>
          </Link>
        ))}
    </Menu>
  );

  //</SubMenu>return (
  //   <div className="dropdown">
  //     <button onClick={handleOpen}>
  //       {/* <img
  //         className="menu_img"
  //         src={require("./images/menu.jpg")}
  //         alt="hamburger menu icon"
  //         onClick={handleOpen}
  //       /> */} menu
  //     </button>
  //     {open ? (
  //       <ul className="menu">
  //         {topics.map((topic, index) => {
  //           return (
  //             <li className="menu-item">
  //               <Link key={index} to={`/topics/${topic}`} topic={topic}>
  //                 <p className="topicList">{topic}</p>
  //               </Link>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     ) : null}
  //   </div>
  // );
};

export default DropdownMenu;

// article on how to get menu to close when use clicks outside https://www.robinwieruch.de/react-hook-detect-click-outside-component/
