import { Link } from "react-router-dom";

import Login from "./Login";
import Topics from "./Topics";

const Header = ({ user, setUser }) => {
  return (
    <div className="header">
      <Login user={user} setUser={setUser} />
      <Link to="/">
        <h1 className="title">NORTHCODERS NEWS</h1>
      </Link>
      <Topics />
    </div>
  );
};

export default Header;
