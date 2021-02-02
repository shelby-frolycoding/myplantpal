import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.css"

export default function Layout(props) {
  const {user, handleLogout} = props
  return (
    <div className="layout">
      <Nav user={user} />
      {props.children}
      <Footer />
    </div>

  );
}