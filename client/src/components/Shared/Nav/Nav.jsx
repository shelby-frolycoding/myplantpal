import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { CSSTransition } from "react-transition-group"
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav(props) {
  const { user } = props;
  const [userMenuToggle, setUserMenuToggle] = useState(false);


  const authUserLinks = (
    <>
      <Link className="user-link" to="/add-plant">
        Add Plant
      </Link>
      <Link className="user-link" to="/log-out">
        Log Out
      </Link>
    </>
  );
  const unAuthUserLinks = (
    <>
      <Link className="user-link" to="/login">
     Log In
      </Link>
      <Link className="user-link" to="/register">
        Register
      </Link>
    </>
  );
  return (
  
    <div className="all-nav">
      <div className="logo-nav">
        <Link className="home-link" to="/">
          <Logo className="logo" />
        </Link>
      </div>
  
      <div className="nav-icons">
        {user && <div className="welcome-msg">Hey there, {user.username}!</div>}
     
        <div className="nav-icon">
        <Link className="link-icon" to="/">
            <FontAwesomeIcon icon={faHome} name="home" />
            </Link>
          </div>
          
          <div className="nav-icon">
        <Link className="link-icon" to="/my-plants">
        <FontAwesomeIcon icon={faSeedling} />
          </Link>
        </div>
        <Link className="link-icon" to="/login">
        <div className="nav-icon">
            <FontAwesomeIcon className="nav-icon"  icon={faUser}/>
            </div>
            </Link>
        
        {/* <div className="nav-icon">
          <FontAwesomeIcon className= "nav-icon"
            icon={faUser}
            name="userMenuToggle"
            onClick={() => setUserMenuToggle((prev) => !prev)}
          />
        </div>
        <CSSTransition
          timeout={300}
          in={userMenuToggle}
          unmountOnExit
          classNames="user-menu"
        >
          <div className="user-menu">
            {user ? authUserLinks : unAuthUserLinks}
          </div>
        </CSSTransition> */}
      
        </div>
      </div>
   
  );
}