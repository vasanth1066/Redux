import classes from "./Header.module.css";

import { AuthAction } from "../Store/index";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const showauth = useSelector((state) => state.Auth.isAuthentication);

  const LogoutHandler = (event) => {
    event.preventDefault();
    dispatch(AuthAction.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {showauth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={LogoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
