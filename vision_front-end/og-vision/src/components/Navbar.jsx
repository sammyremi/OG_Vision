import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/" class="list">
            Dashboard
          </Link>
          <Link to="/screenshots" class="list">
            Screenshots
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
