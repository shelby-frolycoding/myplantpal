import "./Logo.css"
import logo from "../../../images/logo1.png"

export default function Logo() {
  return (
    <div className="logo">
      <img className="main-logo" src={logo} alt="main logo" />
    </div>
  );
}