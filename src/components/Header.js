import "../CSSComponets/header.css";
import User from "./User";
import UserList from "./UserList";

const Header = () => {
  return (
    <header>
      <h1 className="NC-header">Northcoders News</h1>
      <User />
      <UserList />
    </header>
  );
};

export default Header;
