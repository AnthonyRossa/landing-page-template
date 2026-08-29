import "./Navigation.css";
import logo from "../../assets/logo.png";

export default function Navigation() {
  return (
    <div className="nav">
      <img className="nav__logo-img" src={logo} alt="Logo"></img>
      <nav className="nav__content">
        <ul className="nav__list">
          <li className="nav__list-item">About</li>
          <li className="nav__list-item">Products</li>
          <li className="nav__list-item">Contact</li>
          <li className="nav__list-item">Find us</li>
        </ul>
      </nav>
    </div>
  );
}
