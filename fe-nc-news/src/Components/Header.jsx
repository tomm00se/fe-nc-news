import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/news">
      <div className="Header__title">
        <h1>NC-NEWS</h1>
      </div>
    </Link>
  );
};

export default Header;
