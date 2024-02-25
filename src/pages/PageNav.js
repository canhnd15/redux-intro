import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <NavLink to={"/customer"} className="w3-bar-item w3-button">
        Customer
      </NavLink>
      <NavLink to={"/account"} className="w3-bar-item w3-button">
        Account
      </NavLink>
    </nav>
  );
}

export default PageNav;
