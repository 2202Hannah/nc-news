import { Link } from "react-router-dom";

import Topics from "./Topics";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="title">NORTHCODERS NEWS</h1>
      </Link>
      <Topics />
    </div>
  );
};

export default Header;
