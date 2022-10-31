// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./styles.css";
// import { fetchTopics } from "../utils";

// const Topics = () => {
//   const [topics, setTopics] = useState([]);

//   useEffect(() => {
//     fetchTopics().then(data => {
//       const topicsArray = data.map(topic => topic.topic_name);
//       setTopics(topicsArray);
//     });
//   }, []);

//   return (
//     <div className="topics">
//       <p>Filter By:</p>
//       {topics.map(topic => {
//         return (
//           <Link key={topic} to={`/items/${topic}`} topic={topic}>
//             <p className="topicList">{topic}</p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default Topics;
