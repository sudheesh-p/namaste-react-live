import { Link } from "react-router-dom";
import { ICON_CDN_URL } from "../Constants";
import useOnline from "../utils/useOnline";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={ICON_CDN_URL}
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li>Contact</li>
          <li><Link to='/instamart'>Cart</Link></li>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
    </div>
  );
};

export default Header;
