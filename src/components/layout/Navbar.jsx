import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="text-white">
        Home
      </Link>
    </div>
  );
};

export default Navbar;
