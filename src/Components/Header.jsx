import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./contexts/Users";
import TopicNavigation from "./TopicNavigaton";

const Header = () => {
  const { user } = useContext(UserContext);

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
      <label className="Header__users--label">
        Logged In as: {user.username ? user.username : "Not signed in"}
      </label>
    </>
  );
};

export default Header;
