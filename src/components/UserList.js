import "../CSSComponets/userList.css";
import { fetchUserList } from "../api";
import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/currentUser";

const UserList = () => {
  const [usersData, setUsersData] = useState([]);
  const { setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    fetchUserList().then((users) => {
      setUsersData(users);
    });
  }, []);

  const handleClick = (event) => {
    setCurrentUser(JSON.parse(event.target.value));
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
              key={JSON.stringify(user)}
              value={JSON.stringify(user)}
            >
              {user.name}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default UserList;
