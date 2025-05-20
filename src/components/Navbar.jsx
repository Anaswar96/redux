import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const { totalQuantity } = useSelector((state) => state.cart )
  


  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Products", to: "/products" },
    { name: "Contact", to: "/contact" },
  ];
  
   return (
    <nav className="bg-[whitesmoke] shadow-md px-4 py-2 fixed top-0 w-full z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <Link to="/" className="text-xl font-bold text-green-700">Vzone</Link>

    <div className="hidden md:flex flex-1 mx-6">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-3 py-1.5 border border-[gray] rounded-full focus:outline-none focus:ring-2 focus:ring-[#649164]"
      />
    </div>

    <div className="hidden md:flex items-center space-x-5 text-[gray]">
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`hover:text-green-700 px-2 py-0.5 transition-colors active:text-green-900 ${
            pathname === link.to ? "text-green-900 font-semibold underline" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}

      <Link to="/cart" className="relative hover:text-green-600 active:text-green-800">
        <ShoppingCart className="w-5 h-5" />
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1.5 rounded-full">
            {totalQuantity}
          </span>
        )}
      </Link>
      
    </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-[gray] font-medium">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-[gray] rounded-full focus:outline-none focus:ring-2 focus:ring-[green]"
          />
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-2 py-1 rounded active:bg-green-100 ${
                    pathname === link.to ? "text-green-900 font-semibold bg-green-50" : "hover:text-green-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li style={{ position: "relative" }}>
              <Link to="/cart" className="block px-2 hover:text-green-600 active:text-green-800">Cart{cartCount > 0 && (
                  <span className=" bg-green-600 text-white text-xs px-1.5 rounded-full" >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li> 
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
