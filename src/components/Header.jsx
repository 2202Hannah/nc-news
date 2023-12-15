import NavBar from "./NavBar";

const Header = ({ user, setUser }) => {
  return (
    <div className="header">
      <NavBar user={user} setUser={setUser} />
    </div>
  );
};

export default Header;
