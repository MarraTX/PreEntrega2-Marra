import { useState } from "react";
import { CartWidgets } from "../../common/cartWidget/CartWidgets";
import { Link } from "react-router-dom";
import { categories } from "./categories";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <button
          className="block md:hidden mr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-white">&#9776;</span>
        </button>

        <Link to="/" className="text-lg font-bold mr-4">
          NATURAL CHADI
        </Link>

        <div className="flex-grow md:flex md:justify-center">
          {/* Enlaces del navbar */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex space-x-4 mt-2 md:mt-0`}
          >
            {categories.map(({ title, path }) => (
              <li key={title} className="text-center">
                <Link
                  to={path}
                  className="block py-2 hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/cart" className="flex items-center">
          <CartWidgets />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
