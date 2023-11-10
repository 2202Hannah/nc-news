import { Link } from "react-router-dom";

import Login from "./Login";
import Topics from "./Topics";
import SortBy from "./SortBy";

const Header = ({ user, setUser, setSort, setOrder }) => {
  return (
    <div className="header">
      <Login user={user} setUser={setUser} />
      <Link to="/">
        <h1 className="title">NORTHCODERS NEWS</h1>
      </Link>
      <Topics />
      <SortBy setSort={setSort} setOrder={setOrder} />
    </div>
  );
};

export default Header;
