import "../CSSComponets/userList.css";
import { fetchUserList } from "../api";
import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/currentUser";

const UserList = () => {
  const [usersData, setUsersData] = useState([]);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    fetchUserList().then((users) => {
      setUsersData(users);
    });
  }, []);

  const handleClick = (event) => {
    setCurrentUser(event.target.value);
  };

  return (
    <>
      <section className="buttonContainer">
        <span>
          <u>Log in:</u>
        </span>
        {usersData.map((user) => {
          return (
            <button
              className="userButtons"
              onClick={handleClick}
              key={user.username}
              value={user.username}
            >
              {user.username}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default UserList;
