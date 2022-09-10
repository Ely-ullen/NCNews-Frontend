import "../CSSComponets/header.css";
import User from "./User";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1
        className="NC-header"
        onClick={() => {
          navigate("/");
        }}
      >
        Northcoders News
      </h1>
      <User />
      <UserList />
    </header>
  );
};

export default Header;
