const { Link } = require("react-router-dom");

const ErrorHandler = () => {
  return (
    <div className="Error-Handler__div--parent">
      <h2 className="Error-Handler__heading">
        OH NO!! Looks like we haven't coded this webpage yet! Click here to
        return{" "}
        <Link className="Error-Handler__link" to="/">
          home!
        </Link>
      </h2>
      <img
        className="Error-handler__image"
        src="https://http.cat/404"
        alt="404 Error Message"
      />
    </div>
  );
};

export const ErrorHandler400 = () => {
  return (
    <div className="Error-Handler__div--parent">
      <h2 className="Error-Handler__heading">
        OH NO!! Looks like we haven't coded this webpage yet! Click here to
        return{" "}
        <Link className="Error-Handler__link" to="/">
          home!
        </Link>
      </h2>
      <img
        className="Error-handler__image"
        src="https://http.cat/400"
        alt="400 Error Message"
      />
    </div>
  );
};

export default ErrorHandler;
