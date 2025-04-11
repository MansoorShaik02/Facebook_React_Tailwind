import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="bg-white shadow-md p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-blue-600">
      <Link to="/" className="hover:text-blue-500">
        Fakebook
      </Link>
    </h1>
    <input
      type="text"
      placeholder="Search..."
      className="border rounded-md px-2 py-1"
    />
  </div>
);

export default Navbar;
