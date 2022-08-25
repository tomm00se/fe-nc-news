import { Link } from "react-router-dom";
import Expandable from "./Expandable";
import SortBy from "./SortBy";
import TopicNavigation from "./TopicNavigaton";

const Header = () => {
  return (
    <>
      <Link to="/">
        <div className="Header__title">
          <h1>NC-NEWS</h1>
        </div>
      </Link>
      <div className="Users__div--button">
        <Link to="/users">
          <button className="Users__button--link-to-users">Users</button>
        </Link>
      </div>
      <TopicNavigation />
    </>
  );
};

export default Header;
