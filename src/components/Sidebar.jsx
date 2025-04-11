import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-1/4 bg-gray-100 p-4 hidden md:block">
    <h2 className="font-semibold text-lg mb-4">Menu</h2>
    <ul className="space-y-2">
      <li>
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
      </li>
      <li>
        <Link to="/friends" className="hover:text-blue-500">
          Friends
        </Link>
      </li>
      <Link to="/groups" className="hover:text-blue-500">
        Groups
      </Link>{" "}
      <li className="hover:text-blue-500 cursor-pointer">Settings</li>
    </ul>
  </div>
);

export default Sidebar;
