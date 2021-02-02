import logo from "../../images/point.png"
import "./PointLogo.css"

export default function PointLogo() {
  return (
    <div className="p-logo">
      <img className="p-logo" src={logo} alt="p logo" />
    </div>
  );
}