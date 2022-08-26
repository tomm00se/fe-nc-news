import { useContext, useEffect, useState } from "react";
import { fetchAllUsers } from "../utils/api";
import UserContext from "./contexts/Users";

const ToggleUsers = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetchAllUsers().then((dataFromApi) => {
      setUsers(dataFromApi);
    });
  }, []);

  return (
    <div className="Users__buttons--content">
      {users.map((user) => {
        return (
          <>
            <button key={user.username} onClick={() => setUser(user)}>
              <section className="Users__button--section">
                <p className="Users__button--username-text">
                  <img
                    className="Users__button--image"
                    src={user.avatar_url}
                    alt={user.username}
                  />
                  {user.username}
                </p>
              </section>
            </button>
          </>
        );
      })}
    </div>
  );
};
export default ToggleUsers;
