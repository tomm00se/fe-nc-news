import { Link } from "react-router-dom";
import TopicNavigation from "./TopicNavigaton";

const Header = () => {
  return (
    <>
      <Link to="/news">
        <div className="Header__title">
          <h1>NC-NEWS</h1>
        </div>
      </Link>
      <TopicNavigation />
    </>
  );
};

export default Header;
