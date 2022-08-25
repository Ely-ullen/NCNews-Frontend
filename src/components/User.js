import "../CSSComponets/user.css";
import UserList from "./UserList";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/currentUser";

const User = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return <span id="userID">User: {currentUser} </span>;
  //   {
  /* <span id="userImage">
          {" "}
          <img className="NCperson" src={currentUser.avatar_url} />
        </span> */
  //   }
};

export default User;
