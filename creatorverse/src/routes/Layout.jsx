import { Outlet, Link } from "react-router-dom";
import "../Layout.css"

const Layout = () => {
  return (
    <div className="navAlign">
      <nav className="navbar">
        <div className="title">
          <h1> Creatorverse </h1>
        </div>
        <div className="navBtns">
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/">
              View All Creators
            </Link>
          </li>
          <li className="home-link" key="add-button">
            <Link to="/add">
              Add Creator
            </Link>
          </li>
        </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;