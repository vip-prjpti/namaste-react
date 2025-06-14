import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import {Link} from "react-router"
 
export const Header = () => {

  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
        <Link to ='/'> Home</Link>
        <Link to ='/about'> About</Link>
        <Link to ='/'> Contact</Link>
        <Link to ='/'> Cart</Link>
          <button className="login" onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;