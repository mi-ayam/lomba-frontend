import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="flex px-6 items-center space-x-5">
      <Link to="/" className="text-white">
        Home
      </Link>
      <Link to="/postCompetition">
        <Button
          value="Post Competition"
          textColor="text-white"
          backgroundColor="bg-secondary-blue"
        />
      </Link>
    </div>
  );
};

export default Navbar;
