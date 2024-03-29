import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../../assets/ayoLombaLogo.png";

const Navbar = () => {
  return (
    <nav
      className="flex w-full items-center justify-between
      space-x-5 px-4"
    >
      <Link to="/" className="text-white">
        <img className="w-20 h-20" src={Logo} alt="Logo" />
      </Link>
      <div className="flex space-x-5">
        <h2 className="text-white">Home</h2>
        <h2 className="text-white">Competitions</h2>
        <h2 className="text-white">About Us</h2>
      </div>
      <div className="space-x-5">
        <Link to="/login">
          <Button value="Login" textColor="text-white" backgroundColor="bg-secondary-blue" />
        </Link>
        <Link to="/postCompetition">
          <Button
            value="Post Competition"
            textColor="text-white"
            backgroundColor="bg-secondary-blue"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
