import "../CSSComponets/user.css";
import UserList from "./UserList";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/currentUser";

const User = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return <span id="userID">User: {currentUser.name} </span>;
};

export default User;
