import { Link } from "react-router-dom";

import Login from "./Login";
import Logo from "./Logo";

const Header = ({ user, setUser }) => {
  return (
    <div className="header">
      <Login user={user} setUser={setUser} />
      <Link to="/">
        {/* <h1 className="title">STAPLETON STREET NEWS</h1> */}
        {/* <Logo /> */}
      </Link>
    </div>
  );
};

export default Header;
