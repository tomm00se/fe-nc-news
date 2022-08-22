const { Link } = require("react-router-dom");

const TopicNavigation = () => {
  return (
    <div className="Nav__button--parent">
      <Link to="/news/coding">
        <button className="Nav__button--child">Coding</button>
      </Link>
      <Link to="/news/cooking">
        <button className="Nav__button--child">Cooking</button>
      </Link>
      <Link to="/news/football">
        <button className="Nav__button--child">Football</button>
      </Link>
    </div>
  );
};

export default TopicNavigation;
