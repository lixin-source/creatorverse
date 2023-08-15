import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <h1 className="title"> Creatorverse </h1>
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/">
              View All Creators
            </Link>
          </li>
          <li className="home-link" key="home-button">
            <Link to="/add">
              Add Creator
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;