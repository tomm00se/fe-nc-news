import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./contexts/Users";
import SortBy from "./SortBy";
import TopicNavigation from "./TopicNavigaton";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="Header__container--all">
      <Link className="Header__title--link" to="/">
        <div className="Header__title">
          <h1>NC-NEWS</h1>
        </div>
      </Link>
      <div className="Header__container">
        <label className="Header__users--label">
          Logged In as: {user.username ? user.username : "Not signed in"}
        </label>
        <TopicNavigation />
        <div className="Users__div--button">
          <Link to="/users">
            <button className="Users__button--link-to-users">Users</button>
          </Link>
        </div>
      </div>
      <SortBy />
    </div>
  );
};

export default Header;
