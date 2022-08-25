import { useState } from "react";

const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currentStateOfToggle) => !currentStateOfToggle);
  };
  return (
    <div className="Comments__div--parent">
      <button onClick={toggleOpen} className="Comments__button">
        {isOpen ? "Hide Section" : "Show Section"}
      </button>
      {isOpen ? children : null}
    </div>
  );
};

export default Expandable;
