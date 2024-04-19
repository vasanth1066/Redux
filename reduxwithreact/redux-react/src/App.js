import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { Fragment } from "react";

import { useSelector } from "react-redux";

function App() {
  const showauth = useSelector((state) => state.Auth.isAuthentication);
  return (
    <Fragment>
      <Header />
      {!showauth && <Auth />}
      {showauth && <UserProfile />}

      <Counter />
    </Fragment>
  );
}

export default App;
