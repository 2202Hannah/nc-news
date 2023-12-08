import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = ({ user, setUser }) => {
  return (
    <div className="header">
      <NavBar user={user} setUser={setUser} />
    </div>
  );
};

export default Header;
