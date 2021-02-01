import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.css"

export default function Layout(props) {
  return (
    <div className="layout">
      <Nav user={props.user} />
      {props.children}
      <Footer />
    </div>

  );
}