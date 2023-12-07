import "./styles.css";

const Logo = () => {
  return (
    <img
      className="logo"
      id="logo"
      src={require("./images/logo.png")}
      alt="Stapleton News logo of donut wearing boots"
    />
  );
};

export default Logo;
