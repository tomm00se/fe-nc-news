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
        src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-10996.jpg?w=1800&t=st=1661435514~exp=1661436114~hmac=9e45ac7c8d5be853c7dc694aa507e697bf717cd286cdf33053242a6bd9b10624"
      />
    </div>
  );
};

export default ErrorHandler;
