import { useContext } from "react";
import { Link } from "react-router-dom";
import { ICON_CDN_URL } from "../Constants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import userContext from "../utils/userContext"

const Title = () => (
  <a href="/">
    <img
      className="h-24 p-2"
      alt="logo"
      src={ICON_CDN_URL}
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  const {user} = useContext(UserContext);
  return (
    <div className="flex space-x-2 justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2"><Link to='/'>Home</Link></li>
          <li className="px-2"><Link to='/about'>About</Link></li>
          <li className="px-2">Contact</li>
          <li className="px-2"><Link to='/instamart'>Cart</Link></li>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
    </div>
  );
};

export default Header;
