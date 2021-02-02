import logo from "../../images/heart.png"
import "./HeartLogo.css"

export default function HeartLogo() {
  return (
    <div className="h-logo">
      <img className="h-logo" src={logo} alt="h logo" />
    </div>
  );
}