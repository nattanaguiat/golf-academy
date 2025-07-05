import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <nav className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <Link to="/" className="text-xl font-bold">
        <h1>Golf Club</h1>
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/coaches" className="hover:underline">
          Coaches
        </Link>

        
      </div>
    </nav>
  );
};

export default Navbar;
