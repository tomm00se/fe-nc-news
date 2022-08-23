import { Link } from "react-router-dom";
import TopicNavigation from "./TopicNavigaton";

const Header = () => {
  return (
    <>
      <Link to="/">
        <div className="Header__title">
          <h1>NC-NEWS</h1>
        </div>
      </Link>
      <Link to="/users">
        <button className="Users__button--link-to-users">Users</button>
      </Link>
      <TopicNavigation />
    </>
  );
};

export default Header;
