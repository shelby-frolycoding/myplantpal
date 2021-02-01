import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCopyright,
  faEnvelope,
  faHandPeace
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <div className="footer">
      <div className="me">
        <FontAwesomeIcon icon={faCopyright} /> Froly Coding
      </div>
      <div className="social-icons">
        <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
        <FontAwesomeIcon className="insta" icon={faInstagramSquare} />
        <FontAwesomeIcon className="twit" icon={faTwitterSquare} />
        <FontAwesomeIcon className="email" icon={faEnvelope} />
      </div>

     
      <button className="leave">
        <Link className="sign-out" to="/log-out">
          <p className="sign-out">
            Sign Out
            <FontAwesomeIcon className="leave-icon" icon={faHandPeace} />
          </p>
        </Link>
      </button>
    </div>
  );
}